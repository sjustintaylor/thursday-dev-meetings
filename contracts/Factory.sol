// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./BaseToken.sol";
import "./Registry.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Factory is Ownable, Registry {
    BaseToken public immutable base;
    using Strings for uint256;

    constructor() {
        BaseToken baseToken = new BaseToken();
        base = baseToken;
        BaseToken(baseToken).initialize(0, address(this), "Base", "BASE");
    }

    function createToken(
        uint256 nftID,
        uint256 supply,
        address initialOwner
    ) external onlyOwner {
        bytes32 salt = keccak256(abi.encodePacked(nftID));
        BaseToken newToken = BaseToken(
            Clones.predictDeterministicAddress(address(base), salt)
        );

        string memory name = string(
            bytes.concat(bytes("NFT: "), bytes(nftID.toString()))
        );
        string memory symbol = string(
            bytes.concat(bytes("NFT-"), bytes(nftID.toString()))
        );
        setTokenAddress(nftID, address(newToken));

        Clones.cloneDeterministic(address(base), salt);
        newToken.initialize(supply, initialOwner, name, symbol);
    }
}
