// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Base.sol";
import "./Registry.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract Factory is Ownable, Registry{
    BaseToken immutable base;

    constructor(){
        BaseToken baseToken = new BaseToken();
        base = baseToken;
        BaseToken(baseToken).initialize(0, address(this), "Base", "BASE");
    }

    function createToken(uint256 nftID, uint256 supply, address initialOwner) external onlyOwner {
        bytes32 salt = keccak256(abi.encodePacked(nftID));
        BaseToken newToken = BaseToken(Clones.predictDeterministicAddress(address(base), salt));
        
        bytes memory name = abi.encodePacked(bytes("NFT: "), nftID);
        bytes memory symbol =  abi.encodePacked(bytes("NFT-"), nftID);
        setTokenAddress(nftID, address(newToken));

        Clones.cloneDeterministic(address(base), salt);
        newToken.initialize(supply, initialOwner, string(name), string(symbol));
    }
}