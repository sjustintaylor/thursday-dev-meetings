import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  // Deploy factory
  await deploy("Factory", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // Deploy NFT
  await deploy("MockNFT", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // Deploy escrow
  await deploy("NFTEscrow", {
    from: deployer,
    args: [
      (await ethers.getContract("Factory")).address,
      (await ethers.getContract("MockNFT")).address,
    ],
    log: true,
    autoMine: true,
  });

  // Transfer control of the factory
  await hre.deployments.execute(
    "Factory",
    {
      from: deployer,
      log: true,
      autoMine: true,
    },
    "transferOwnership",
    (
      await ethers.getContract("NFTEscrow")
    ).address
  );
};
export default func;
func.tags = ["escrow"];
