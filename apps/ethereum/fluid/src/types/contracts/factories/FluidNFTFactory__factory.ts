/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FluidNFTFactory,
  FluidNFTFactoryInterface,
} from "../FluidNFTFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_masterContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract IConstantFlowAgreementV1",
        name: "cfa",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "acceptedToken",
        type: "address",
      },
    ],
    name: "createInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tenant",
        type: "address",
      },
    ],
    name: "getProxy",
    outputs: [
      {
        internalType: "contract FluidNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterContract",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tenants",
    outputs: [
      {
        internalType: "contract FluidNFT",
        name: "nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052600180546001600160a01b03191673d847c7408c48b6b6720cca75eb30a93acbf5163d17905534801561003657600080fd5b506040516105623803806105628339810160408190526100559161006a565b60601b6001600160601b031916608052610098565b60006020828403121561007b578081fd5b81516001600160a01b0381168114610091578182fd5b9392505050565b60805160601c6104a96100b96000398060c052806101b352506104a96000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806319160fbf14610051578063b7fba4d314610066578063cd446e221461008f578063fd9153a314610097575b600080fd5b61006461005f3660046102ee565b6100b8565b005b6100796100743660046102cb565b610193565b60405161008691906103d4565b60405180910390f35b6100796101b1565b6100aa6100a53660046102cb565b6101d5565b6040516100869291906103e8565b3360006100e47f00000000000000000000000000000000000000000000000000000000000000006101fb565b604051630a30735b60e41b81529091506001600160a01b0382169063a30735b09061011d908a908a9087908b908b908b90600401610402565b600060405180830381600087803b15801561013757600080fd5b505af115801561014b573d6000803e3d6000fd5b5050506001600160a01b0392831660008181526020819052604090208054939094166001600160a01b0319938416178455600190930180549092169092179055505050505050565b6001600160a01b039081166000908152602081905260409020541690565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060208190529081526040902080546001909101546001600160a01b03918216911682565b6000808260601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f0949350505050565b600082601f83011261025d578081fd5b813567ffffffffffffffff80821115610274578283fd5b604051601f8301601f191681016020018281118282101715610294578485fd5b6040528281529250828483016020018610156102af57600080fd5b8260208601602083013760006020848301015250505092915050565b6000602082840312156102dc578081fd5b81356102e78161045b565b9392505050565b600080600080600060a08688031215610305578081fd5b853567ffffffffffffffff8082111561031c578283fd5b61032889838a0161024d565b9650602088013591508082111561033d578283fd5b5061034a8882890161024d565b945050604086013561035b8161045b565b9250606086013561036b8161045b565b9150608086013561037b8161045b565b809150509295509295909350565b60008151808452815b818110156103ae57602081850181015186830182015201610392565b818111156103bf5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b600060c0825261041560c0830189610389565b82810360208401526104278189610389565b6001600160a01b03978816604085015295871660608401525050918416608083015290921660a09092019190915292915050565b6001600160a01b038116811461047057600080fd5b5056fea2646970667358221220c68206c53b763f3537800d82861ce60e43ceba8412c0cc8706b0edc2b94c2a8364736f6c63430007010033";

type FluidNFTFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FluidNFTFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FluidNFTFactory__factory extends ContractFactory {
  constructor(...args: FluidNFTFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FluidNFTFactory";
  }

  deploy(
    _masterContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FluidNFTFactory> {
    return super.deploy(
      _masterContract,
      overrides || {}
    ) as Promise<FluidNFTFactory>;
  }
  getDeployTransaction(
    _masterContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_masterContract, overrides || {});
  }
  attach(address: string): FluidNFTFactory {
    return super.attach(address) as FluidNFTFactory;
  }
  connect(signer: Signer): FluidNFTFactory__factory {
    return super.connect(signer) as FluidNFTFactory__factory;
  }
  static readonly contractName: "FluidNFTFactory";
  public readonly contractName: "FluidNFTFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FluidNFTFactoryInterface {
    return new utils.Interface(_abi) as FluidNFTFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FluidNFTFactory {
    return new Contract(address, _abi, signerOrProvider) as FluidNFTFactory;
  }
}