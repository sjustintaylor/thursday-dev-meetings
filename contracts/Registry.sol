// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Registry {
    // NFT ID => token address
    mapping(uint256 => address) internal tokenRegister;

    function getTokenAddress(uint256 nftID) external view returns (address) {
        return tokenRegister[nftID];
    }

    function setTokenAddress(uint256 nftID, address token) internal {
        require(tokenRegister[nftID] == address(0), "token already exists");
        require(token != address(0), "token address invalid");
        tokenRegister[nftID] = token;
    }
}
