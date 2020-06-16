# ERC20 Token Generator

[![Build Status](https://travis-ci.org/vittominacori/erc20-generator.svg?branch=master)](https://travis-ci.org/vittominacori/erc20-generator)
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/erc20-generator/badge.svg?branch=master)](https://coveralls.io/github/vittominacori/erc20-generator?branch=master)
[![MIT licensed](https://img.shields.io/github/license/vittominacori/erc20-generator.svg)](https://github.com/vittominacori/erc20-generator/blob/master/LICENSE)

A simple Smart Contract generator for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.

Token has a Role Based Access Control so you can add the `MINTER` permission to users or Smart Contracts.

Token has a `trasferEnabled` property. Nobody can transfer tokens until the property will be enabled or you can define users as `OPERATOR` allowed to transfer also if not enabled.

Token has the ERC1363 behaviors. [ERC1363](https://eips.ethereum.org/EIPS/eip-1363) is an ERC20 compatible token that can make a callback on the receiver contract to notify token transfers or token approvals.

Token extends from [ERC20Base](https://github.com/vittominacori/erc20-token).

DApp source here [https://github.com/vittominacori/erc20-generator/tree/dapp](https://github.com/vittominacori/erc20-generator/tree/dapp).


## Try it

[https://vittominacori.github.io/erc20-generator](https://vittominacori.github.io/erc20-generator)


## Development


### Install dependencies

```bash
npm install
```


### Usage (using Truffle)

Open the Truffle console

```bash
npm run console
```


#### Compile

```bash
npm run compile
```


#### Test

```bash
npm run test
```


### Usage (using Buidler)

Open the Buidler console

```bash
npm run buidler:console
```


#### Compile

```bash
npm run buidler:compile
```


#### Test

```bash
npm run buidler:test
```


### Code Coverage

```bash
npm run coverage
```


## Linter

Use Solhint

```bash
npm run lint:sol
```

Use ESLint

```bash
npm run lint:js
```

Use ESLint and fix

```bash
npm run lint:fix
```


## Flattener

This allow to flatten the code into a single file

Edit `scripts/flat.sh` to add your contracts

```bash
npm run flat
```


## Analysis

Note: it is better to analyze the flattened code to have a bigger overview on the entire codebase. So run the flattener first.

### Describe

The `describe` command shows a summary of the contracts and methods in the files provided

```bash
surya describe dist/BaseToken.dist.sol
```

### Dependencies

The `dependencies` command outputs the c3-linearization of a given contract's inheirtance graph. Contracts will be listed starting with most-derived, ie. if the same function is defined in more than one contract, the solidity compiler will use the definition in whichever contract is listed first.

```bash
surya dependencies BaseToken dist/BaseToken.dist.sol
```
### Generate Report

Edit `scripts/analyze.sh` to add your contracts

```bash
npm run analyze
```

The `inheritance` command outputs a DOT-formatted graph of the inheritance tree.

The `graph` command outputs a DOT-formatted graph of the control flow.

The `mdreport` command creates a markdown description report with tables comprising information about the system's files, contracts and their functions.

The `sol2uml` generates UML class diagram from Solidity contracts.


## Token verification on Etherscan

Use the dist smart contracts [dist/BaseToken.dist.sol](https://github.com/vittominacori/erc20-generator/blob/master/dist/BaseToken.dist.sol)

Solc version is 0.6.10


## License

Code released under the [MIT License](https://github.com/vittominacori/erc20-generator/blob/master/LICENSE).
