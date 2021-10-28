// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract BaseToken is ERC20Upgradeable {
    function initialize(uint256 supply, address owner, string calldata tokenName, string calldata tokenSymbol) external initializer {
        __ERC20_init(tokenName, tokenSymbol);
        _mint(owner, supply);
    }
}