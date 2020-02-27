# Dr Zedds Mystery Magical ERC20 Token Generator

[![Build Status](https://travis-ci.org/vittominacori/erc20-generator.svg?branch=master)](https://travis-ci.org/vittominacori/erc20-generator)
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/erc20-generator/badge.svg?branch=master)](https://coveralls.io/github/vittominacori/erc20-generator?branch=master)
[![MIT licensed](https://img.shields.io/github/license/vittominacori/erc20-generator.svg)](https://github.com/vittominacori/erc20-generator/blob/master/LICENSE)

A simple Smart Contract for a Standard, Capped, Mintable, Burnable ERC20 Token.

Token has a Role Based Access Control so you can add the `minter` permission to users or Smart Contracts.

Token has a `trasferEnabled` property. Nobody can transfer tokens until the property will be enabled or you can define users as `operator` allowed to transfer also if not enabled.

DApp here [https://vittominacori.github.io/erc20-generator](https://vittominacori.github.io/erc20-generator)

DApp source here [https://github.com/vittominacori/erc20-generator/tree/dapp](https://github.com/vittominacori/erc20-generator/tree/dapp)

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

## Token verification on Etherscan

Use the dist smart contracts [dist/ERC20Token.dist.sol](https://github.com/vittominacori/erc20-generator/blob/master/dist/ERC20Token.dist.sol)

Solc version is 0.5.15


## License

Code released under the [MIT License](https://github.com/vittominacori/erc20-generator/blob/master/LICENSE).
