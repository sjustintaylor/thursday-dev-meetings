import { deployments, ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {
  NFTEscrow,
  MockNFT,
  Factory,
  BaseToken,
  ERC20Upgradeable,
  IERC20,
} from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import erc20 from "./erc20.json";
chai.use(chaiAsPromised);
const { expect } = chai;

describe("Escrow", () => {
  let deployer: SignerWithAddress, user: SignerWithAddress;
  let escrow: NFTEscrow;
  let factory: Factory;
  let nftA: number, nftB: number;
  beforeEach(async () => {
    [deployer, user] = await ethers.getSigners();
    await deployments.fixture("escrow");

    escrow = (await ethers.getContract("NFTEscrow")) as NFTEscrow;
    factory = (await ethers.getContract("Factory")) as Factory;

    const mockNft = (await ethers.getContract("MockNFT")) as MockNFT;

    await mockNft.createNFT(
      user.address,
      ethers.utils.randomBytes(32).toString()
    );
    await mockNft.createNFT(
      user.address,
      ethers.utils.randomBytes(32).toString()
    );

    nftA = 1;
    nftB = 2;

    await mockNft.connect(user).approve(escrow.address, 1);
    await mockNft.connect(user).approve(escrow.address, 2);
  });
  it("should create a new erc20 token contract for each nft", async () => {
    expect(await factory.getTokenAddress(nftA)).to.eq(
      ethers.constants.AddressZero
    );
    expect(await factory.getTokenAddress(nftB)).to.eq(
      ethers.constants.AddressZero
    );

    // Create the token sets
    await escrow.connect(user).createTokens(nftA);
    await escrow.connect(user).createTokens(nftB);

    // Check for bin juice
    const nftAToken = (await ethers.getContractAt(
      erc20,
      await factory.getTokenAddress(nftA)
    )) as BaseToken;
    const nftBToken = (await ethers.getContractAt(
      erc20,
      await factory.getTokenAddress(nftB)
    )) as BaseToken;
    const baseToken = await factory.base();

    expect(nftAToken.address).to.not.eq(ethers.constants.AddressZero);
    expect(nftBToken.address).to.not.eq(ethers.constants.AddressZero);
    expect(nftAToken).to.not.eq(baseToken);
    expect(nftBToken).to.not.eq(baseToken);

    expect((await nftAToken.symbol()).toString()).to.eq("NFT-1");
    expect(await nftBToken.symbol()).to.eq("NFT-2");

    expect(await nftAToken.name()).to.eq("NFT: 1");
    expect(await nftBToken.name()).to.eq("NFT: 2");
  });
  it("should issue all the nft tokens to the creator", async () => {
    // Create the token sets
    await escrow.connect(user).createTokens(nftA);
    await escrow.connect(user).createTokens(nftB);

    // Check for bin juice
    const nftAToken = (await ethers.getContractAt(
      erc20,
      await factory.getTokenAddress(nftA)
    )) as BaseToken;
    const nftBToken = (await ethers.getContractAt(
      erc20,
      await factory.getTokenAddress(nftB)
    )) as BaseToken;

    expect(await nftAToken.balanceOf(user.address)).to.eq(
      await escrow.supply()
    );
    expect(await nftBToken.balanceOf(user.address)).to.eq(
      await escrow.supply()
    );
  });
  it("should allow a user to redeem the tokens for an nft", async () => {
    // Create the token sets
    await escrow.connect(user).createTokens(nftA);

    // Check for bin juice
    const mockNft = (await ethers.getContract("MockNFT")) as MockNFT;
    const nftAToken = (await ethers.getContractAt(
      erc20,
      await factory.getTokenAddress(nftA)
    )) as BaseToken;
    await nftAToken
      .connect(user)
      .approve(escrow.address, ethers.constants.MaxUint256);

    expect(await nftAToken.balanceOf(user.address)).to.eq(
      await escrow.supply()
    );
    expect(await mockNft.ownerOf(1)).to.eq(escrow.address);

    await escrow.connect(user).redeemTokens(1);

    expect(await nftAToken.balanceOf(user.address)).to.eq(0);
    expect(await mockNft.ownerOf(1)).to.eq(user.address);
    expect(await nftAToken.balanceOf(escrow.address)).to.eq(
      await escrow.supply()
    );
  });
});
