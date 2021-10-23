/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTEscrow, NFTEscrowInterface } from "../NFTEscrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
    ],
    name: "createTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
    ],
    name: "redeemTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161094e38038061094e833981810160405281019061003291906100bc565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050610141565b6000815190506100b68161012a565b92915050565b600080604083850312156100cf57600080fd5b60006100dd858286016100a7565b92505060206100ee858286016100a7565b9150509250929050565b60006101038261010a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610133816100f8565b811461013e57600080fd5b50565b60805160601c60a05160601c6107d56101796000396000818161010d01526103f6015260008181607501526101a101526107d56000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637e1f2bb81461003b578063a6e158f814610057575b600080fd5b6100556004803603810190610050919061052d565b610073565b005b610071600480360381019061006c919061052d565b61019d565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ebbf747d82683635c9adc5dea00000336040518463ffffffff1660e01b81526004016100d9939291906106ca565b600060405180830381600087803b1580156100f357600080fd5b505af1158015610107573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342842e0e3330846040518463ffffffff1660e01b815260040161016893929190610638565b600060405180830381600087803b15801561018257600080fd5b505af1158015610196573d6000803e3d6000fd5b5050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166367ccdf38836040518263ffffffff1660e01b81526004016101f891906106af565b60206040518083038186803b15801561021057600080fd5b505afa158015610224573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024891906104db565b9050683635c9adc5dea000008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161028d919061061d565b60206040518083038186803b1580156102a557600080fd5b505afa1580156102b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dd9190610556565b1461031d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103149061068f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330683635c9adc5dea000006040518463ffffffff1660e01b815260040161036393929190610638565b602060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b59190610504565b6103f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103eb9061066f565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342842e0e3033856040518463ffffffff1660e01b815260040161045193929190610638565b600060405180830381600087803b15801561046b57600080fd5b505af115801561047f573d6000803e3d6000fd5b505050505050565b6000815190506104968161075a565b92915050565b6000815190506104ab81610771565b92915050565b6000813590506104c081610788565b92915050565b6000815190506104d581610788565b92915050565b6000602082840312156104ed57600080fd5b60006104fb84828501610487565b91505092915050565b60006020828403121561051657600080fd5b60006105248482850161049c565b91505092915050565b60006020828403121561053f57600080fd5b600061054d848285016104b1565b91505092915050565b60006020828403121561056857600080fd5b6000610576848285016104c6565b91505092915050565b61058881610712565b82525050565b600061059b601583610701565b91507f746f6b656e207472616e73666572206661696c656400000000000000000000006000830152602082019050919050565b60006105db601283610701565b91507f696e73756666696369656e742066756e647300000000000000000000000000006000830152602082019050919050565b61061781610750565b82525050565b6000602082019050610632600083018461057f565b92915050565b600060608201905061064d600083018661057f565b61065a602083018561057f565b610667604083018461060e565b949350505050565b600060208201905081810360008301526106888161058e565b9050919050565b600060208201905081810360008301526106a8816105ce565b9050919050565b60006020820190506106c4600083018461060e565b92915050565b60006060820190506106df600083018661060e565b6106ec602083018561060e565b6106f9604083018461057f565b949350505050565b600082825260208201905092915050565b600061071d82610730565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61076381610712565b811461076e57600080fd5b50565b61077a81610724565b811461078557600080fd5b50565b61079181610750565b811461079c57600080fd5b5056fea2646970667358221220e56b9b22e374bca2a046eb6d7b3c64678890dc0b72f177d1a489b775a6c1508564736f6c63430008000033";

export class NFTEscrow__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _nft: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTEscrow> {
    return super.deploy(_factory, _nft, overrides || {}) as Promise<NFTEscrow>;
  }
  getDeployTransaction(
    _factory: string,
    _nft: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _nft, overrides || {});
  }
  attach(address: string): NFTEscrow {
    return super.attach(address) as NFTEscrow;
  }
  connect(signer: Signer): NFTEscrow__factory {
    return super.connect(signer) as NFTEscrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTEscrowInterface {
    return new utils.Interface(_abi) as NFTEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTEscrow {
    return new Contract(address, _abi, signerOrProvider) as NFTEscrow;
  }
}
