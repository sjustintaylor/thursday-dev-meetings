/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Factory, FactoryInterface } from "../Factory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "createToken",
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
    name: "getTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5062000032620000266200011260201b60201c565b6200011a60201b60201c565b60006040516200004290620001de565b604051809103906000f0801580156200005f573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1663478606c46000306040518363ffffffff1660e01b8152600401620000d792919062000292565b600060405180830381600087803b158015620000f257600080fd5b505af115801562000107573d6000803e3d6000fd5b50505050506200034c565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611ba5806200109283390190565b620001f781620002fa565b82525050565b620002088162000338565b82525050565b60006200021d600483620002e9565b91507f42617365000000000000000000000000000000000000000000000000000000006000830152602082019050919050565b60006200025f600483620002e9565b91507f42415345000000000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000608082019050620002a96000830185620001fd565b620002b86020830184620001ec565b8181036040830152620002cb816200020e565b90508181036060830152620002e08162000250565b90509392505050565b600082825260208201905092915050565b600062000307826200030e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000345826200032e565b9050919050565b60805160601c610d276200036b600039600061025d0152610d276000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806367ccdf381461005c578063715018a61461008c5780638da5cb5b14610096578063ebbf747d146100b4578063f2fde38b146100d0575b600080fd5b61007660048036038101906100719190610839565b6100ec565b6040516100839190610af9565b60405180910390f35b610094610129565b005b61009e6101b1565b6040516100ab9190610af9565b60405180910390f35b6100ce60048036038101906100c99190610862565b6101da565b005b6100ea60048036038101906100e59190610810565b6103e3565b005b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6101316104db565b73ffffffffffffffffffffffffffffffffffffffff1661014f6101b1565b73ffffffffffffffffffffffffffffffffffffffff16146101a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019c90610b74565b60405180910390fd5b6101af60006104e3565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101e26104db565b73ffffffffffffffffffffffffffffffffffffffff166102006101b1565b73ffffffffffffffffffffffffffffffffffffffff1614610256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024d90610b74565b60405180910390fd5b60006102a87f00000000000000000000000000000000000000000000000000000000000000008560405160200161028d9190610ade565b604051602081830303815290604052805190602001206105a7565b905060006040518060400160405280600581526020017f4e46543a20000000000000000000000000000000000000000000000000000000815250856040516020016102f4929190610ab6565b604051602081830303815290604052905060006040518060400160405280600481526020017f4e46542d000000000000000000000000000000000000000000000000000000008152508660405160200161034f929190610ab6565b604051602081830303815290604052905061036a868461067e565b8273ffffffffffffffffffffffffffffffffffffffff1663478606c4868685856040518563ffffffff1660e01b81526004016103a99493929190610bb4565b600060405180830381600087803b1580156103c357600080fd5b505af11580156103d7573d6000803e3d6000fd5b50505050505050505050565b6103eb6104db565b73ffffffffffffffffffffffffffffffffffffffff166104096101b1565b73ffffffffffffffffffffffffffffffffffffffff161461045f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045690610b74565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c690610b14565b60405180910390fd5b6104d8816104e3565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f5915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066f90610b34565b60405180910390fd5b92915050565b600073ffffffffffffffffffffffffffffffffffffffff166001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610720576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071790610b94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610790576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078790610b54565b60405180910390fd5b806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000813590506107f581610cc3565b92915050565b60008135905061080a81610cda565b92915050565b60006020828403121561082257600080fd5b6000610830848285016107e6565b91505092915050565b60006020828403121561084b57600080fd5b6000610859848285016107fb565b91505092915050565b60008060006060848603121561087757600080fd5b6000610885868287016107fb565b9350506020610896868287016107fb565b92505060406108a7868287016107e6565b9150509250925092565b6108ba81610c39565b82525050565b60006108cb82610c07565b6108d58185610c1d565b93506108e5818560208601610c75565b80840191505092915050565b60006108fc82610c12565b6109068185610c28565b9350610916818560208601610c75565b61091f81610cb2565b840191505092915050565b6000610937602683610c28565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061099d601783610c28565b91507f455243313136373a2063726561746532206661696c65640000000000000000006000830152602082019050919050565b60006109dd601583610c28565b91507f746f6b656e206164647265737320696e76616c696400000000000000000000006000830152602082019050919050565b6000610a1d602083610c28565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000610a5d601483610c28565b91507f746f6b656e20616c7265616479206578697374730000000000000000000000006000830152602082019050919050565b610a9981610c6b565b82525050565b610ab0610aab82610c6b565b610ca8565b82525050565b6000610ac282856108c0565b9150610ace8284610a9f565b6020820191508190509392505050565b6000610aea8284610a9f565b60208201915081905092915050565b6000602082019050610b0e60008301846108b1565b92915050565b60006020820190508181036000830152610b2d8161092a565b9050919050565b60006020820190508181036000830152610b4d81610990565b9050919050565b60006020820190508181036000830152610b6d816109d0565b9050919050565b60006020820190508181036000830152610b8d81610a10565b9050919050565b60006020820190508181036000830152610bad81610a50565b9050919050565b6000608082019050610bc96000830187610a90565b610bd660208301866108b1565b8181036040830152610be881856108f1565b90508181036060830152610bfc81846108f1565b905095945050505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610c4482610c4b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610c93578082015181840152602081019050610c78565b83811115610ca2576000848401525b50505050565b6000819050919050565b6000601f19601f8301169050919050565b610ccc81610c39565b8114610cd757600080fd5b50565b610ce381610c6b565b8114610cee57600080fd5b5056fea26469706673582212207f2681cd5e2259682992ae09b1e6f03066393863a717a10d993a58b31b617eb664736f6c63430008000033608060405234801561001057600080fd5b50611b85806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063478606c411610071578063478606c4146101a357806370a08231146101bf57806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce919061180e565b60405180910390f35b6100f160048036038101906100ec9190611346565b61032f565b6040516100fe91906117f3565b60405180910390f35b61010f61034d565b60405161011c9190611950565b60405180910390f35b61013f600480360381019061013a91906112f7565b610357565b60405161014c91906117f3565b60405180910390f35b61015d61044f565b60405161016a919061196b565b60405180910390f35b61018d60048036038101906101889190611346565b610458565b60405161019a91906117f3565b60405180910390f35b6101bd60048036038101906101b89190611382565b610504565b005b6101d960048036038101906101d49190611292565b61067f565b6040516101e69190611950565b60405180910390f35b6101f76106c8565b604051610204919061180e565b60405180910390f35b61022760048036038101906102229190611346565b61075a565b60405161023491906117f3565b60405180910390f35b61025760048036038101906102529190611346565b610845565b60405161026491906117f3565b60405180910390f35b610287600480360381019061028291906112bb565b610863565b6040516102949190611950565b60405180910390f35b6060603680546102ac90611a80565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890611a80565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b600061034361033c6108ea565b84846108f2565b6001905092915050565b6000603554905090565b6000610364848484610abd565b6000603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103af6108ea565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561042f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610426906118b0565b60405180910390fd5b6104438561043b6108ea565b8584036108f2565b60019150509392505050565b60006012905090565b60006104fa6104656108ea565b8484603460006104736108ea565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104f591906119a2565b6108f2565b6001905092915050565b600060019054906101000a900460ff168061052a575060008054906101000a900460ff16155b610569576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056090611890565b60405180910390fd5b60008060019054906101000a900460ff1615905080156105b9576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61064b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610d41565b6106558688610e2e565b80156106765760008060016101000a81548160ff0219169083151502179055505b50505050505050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546106d790611a80565b80601f016020809104026020016040519081016040528092919081815260200182805461070390611a80565b80156107505780601f1061072557610100808354040283529160200191610750565b820191906000526020600020905b81548152906001019060200180831161073357829003601f168201915b5050505050905090565b600080603460006107696108ea565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081d90611910565b60405180910390fd5b61083a6108316108ea565b858584036108f2565b600191505092915050565b60006108596108526108ea565b8484610abd565b6001905092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610962576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610959906118f0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c990611850565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ab09190611950565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b24906118d0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9490611830565b60405180910390fd5b610ba8838383610f8f565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2690611870565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cc491906119a2565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d289190611950565b60405180910390a3610d3b848484610f94565b50505050565b600060019054906101000a900460ff1680610d67575060008054906101000a900460ff16155b610da6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9d90611890565b60405180910390fd5b60008060019054906101000a900460ff161590508015610df6576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610dfe610f99565b610e088383611072565b8015610e295760008060016101000a81548160ff0219169083151502179055505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9590611930565b60405180910390fd5b610eaa60008383610f8f565b8060356000828254610ebc91906119a2565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f1291906119a2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f779190611950565b60405180910390a3610f8b60008383610f94565b5050565b505050565b505050565b600060019054906101000a900460ff1680610fbf575060008054906101000a900460ff16155b610ffe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff590611890565b60405180910390fd5b60008060019054906101000a900460ff16159050801561104e576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b801561106f5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611098575060008054906101000a900460ff16155b6110d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ce90611890565b60405180910390fd5b60008060019054906101000a900460ff161590508015611127576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b826036908051906020019061113d92919061117b565b50816037908051906020019061115492919061117b565b5080156111765760008060016101000a81548160ff0219169083151502179055505b505050565b82805461118790611a80565b90600052602060002090601f0160209004810192826111a957600085556111f0565b82601f106111c257805160ff19168380011785556111f0565b828001600101855582156111f0579182015b828111156111ef5782518255916020019190600101906111d4565b5b5090506111fd9190611201565b5090565b5b8082111561121a576000816000905550600101611202565b5090565b60008135905061122d81611b21565b92915050565b60008083601f84011261124557600080fd5b8235905067ffffffffffffffff81111561125e57600080fd5b60208301915083600182028301111561127657600080fd5b9250929050565b60008135905061128c81611b38565b92915050565b6000602082840312156112a457600080fd5b60006112b28482850161121e565b91505092915050565b600080604083850312156112ce57600080fd5b60006112dc8582860161121e565b92505060206112ed8582860161121e565b9150509250929050565b60008060006060848603121561130c57600080fd5b600061131a8682870161121e565b935050602061132b8682870161121e565b925050604061133c8682870161127d565b9150509250925092565b6000806040838503121561135957600080fd5b60006113678582860161121e565b92505060206113788582860161127d565b9150509250929050565b6000806000806000806080878903121561139b57600080fd5b60006113a989828a0161127d565b96505060206113ba89828a0161121e565b955050604087013567ffffffffffffffff8111156113d757600080fd5b6113e389828a01611233565b9450945050606087013567ffffffffffffffff81111561140257600080fd5b61140e89828a01611233565b92509250509295509295509295565b61142681611a0a565b82525050565b600061143782611986565b6114418185611991565b9350611451818560208601611a4d565b61145a81611b10565b840191505092915050565b6000611472602383611991565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114d8602283611991565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061153e602683611991565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115a4602e83611991565b91507f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008301527f647920696e697469616c697a65640000000000000000000000000000000000006020830152604082019050919050565b600061160a602883611991565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611670602583611991565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006116d6602483611991565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061173c602583611991565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006117a2601f83611991565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6117de81611a36565b82525050565b6117ed81611a40565b82525050565b6000602082019050611808600083018461141d565b92915050565b60006020820190508181036000830152611828818461142c565b905092915050565b6000602082019050818103600083015261184981611465565b9050919050565b60006020820190508181036000830152611869816114cb565b9050919050565b6000602082019050818103600083015261188981611531565b9050919050565b600060208201905081810360008301526118a981611597565b9050919050565b600060208201905081810360008301526118c9816115fd565b9050919050565b600060208201905081810360008301526118e981611663565b9050919050565b60006020820190508181036000830152611909816116c9565b9050919050565b600060208201905081810360008301526119298161172f565b9050919050565b6000602082019050818103600083015261194981611795565b9050919050565b600060208201905061196560008301846117d5565b92915050565b600060208201905061198060008301846117e4565b92915050565b600081519050919050565b600082825260208201905092915050565b60006119ad82611a36565b91506119b883611a36565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119ed576119ec611ab2565b5b828201905092915050565b6000611a0382611a16565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611a6b578082015181840152602081019050611a50565b83811115611a7a576000848401525b50505050565b60006002820490506001821680611a9857607f821691505b60208210811415611aac57611aab611ae1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611b2a816119f8565b8114611b3557600080fd5b50565b611b4181611a36565b8114611b4c57600080fd5b5056fea2646970667358221220e23fdba48223d6f911b8272350b3077a911924ebf0f73e55019b2535453bcdbf64736f6c63430008000033";

export class Factory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}