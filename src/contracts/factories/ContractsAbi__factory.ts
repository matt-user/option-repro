/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { ContractsAbi, ContractsAbiInterface } from "../ContractsAbi";
const _abi = [
  {
    type: "function",
    name: "test_function",
    inputs: [],
    outputs: [
      {
        type: "enum Option",
        name: "",
        typeArguments: [
          {
            type: "bool",
            name: "",
          },
        ],
        components: [
          {
            type: "()",
            name: "None",
            components: [],
          },
          {
            type: "bool",
            name: "Some",
          },
        ],
      },
    ],
  },
];

export class ContractsAbi__factory {
  static readonly abi = _abi;
  static createInterface(): ContractsAbiInterface {
    return new Interface(_abi) as unknown as ContractsAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): ContractsAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as ContractsAbi;
  }
}
