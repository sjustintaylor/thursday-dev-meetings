// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./Factory.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTEscrow {
    Factory internal immutable factory;
    IERC721 internal immutable nft;
    uint256 public constant supply = 100_000 ether;

    constructor(address _factory, address _nft) {
        factory = Factory(_factory);
        nft = IERC721(_nft);
    }

    function createTokens(uint256 nftID) external {
        address tokenAddress = factory.getTokenAddress(nftID);
        if (tokenAddress != address(0)) {
            require(
                IERC20(tokenAddress).transfer(msg.sender, supply),
                "transfer failed"
            );
        } else {
            factory.createToken(nftID, supply, msg.sender);
        }
        nft.transferFrom(msg.sender, address(this), nftID);
    }

    function redeemTokens(uint256 nftID) external {
        IERC20 token = IERC20(factory.getTokenAddress(nftID));
        require(token.balanceOf(msg.sender) == supply, "insufficient funds");
        require(
            token.transferFrom(msg.sender, address(this), supply),
            "token transfer failed"
        );
        nft.transferFrom(address(this), msg.sender, nftID);
    }
}
