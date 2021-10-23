// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Factory.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTEscrow  {
    Factory immutable internal factory;
    IERC721 immutable internal nft;
    uint256 constant supply = 1000 ether;

    constructor(address _factory, address _nft){
        factory = Factory(_factory);
        nft = IERC721(_nft);
    }

    function createTokens(uint256 nftID)external{
        factory.createToken(nftID, supply, msg.sender);
        nft.safeTransferFrom(msg.sender, address(this), nftID);
    }
    function redeemTokens(uint256 nftID)external{
        IERC20 token = IERC20(factory.getTokenAddress(nftID));
        require(token.balanceOf(msg.sender) == supply, "insufficient funds");
        require(token.transferFrom(msg.sender, address(this), supply), "token transfer failed");
        nft.safeTransferFrom(address(this), msg.sender, nftID);
    }
}