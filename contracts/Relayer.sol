// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Relayer is Ownable {
    struct Address {
        address implementation;
    }
    // keccak256("example.relayer.storage.slot");
    bytes32 internal constant implementationSlot =
        0xbee7bf51329826bfc0e563da7798126a6e01520a976116af19816df6a763ed3f;

    constructor(address implementation, bytes memory constructData) {
        require(implementation != address(0), "implementation invalid");
        // Stores the implementation address in a random slot guaranteed not to collide with implementation slots
        assembly {
            // solium-disable-line
            sstore(implementationSlot, implementation)
        }
        (bool success, ) = implementation.delegatecall(constructData);

        require(success, "constructor failed");
    }

    function setNewImplementation(address implementation) external onlyOwner {
        require(implementation != address(0), "bad implementation");
        assembly {
            sstore(implementationSlot, implementation)
        }
    }

    function getImplementationAddress() public view returns (address) {
        return _getImplementationAddress().implementation;
    }

    function _getImplementationAddress()
        internal
        pure
        returns (Address storage r)
    {
        assembly {
            r.slot := implementationSlot
        }
    }

    receive() external payable {
        revert();
    }

    // The prettier formatter removes the returns declaration, fml.
    // prettier-ignore
    fallback(bytes calldata _input) external payable returns(bytes memory){
        (bool success, bytes memory returnData) = getImplementationAddress()
            .delegatecall(_input);
        require(success);
        return returnData;
    }
}
