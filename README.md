# ERC-20 Vyper vs Solidity

This project compares the Vyper ERC20 ```https://github.com/vyperlang/vyper/blob/master/examples/tokens/ERC20.vy``` with the popular Solidity ERC20 implementations from OpenZepellin and Rari Capital's Solmate. For an apples to apples comparison, one should comment out all the EIP-2612 logic in the Solmate contract ```@rari-capital/solmate/src/tokens/ERC20.sol```.

```shell
npm i
npx hardhat test
```
