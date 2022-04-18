pragma solidity 0.8.10;

import { ERC20 } from "@rari-capital/solmate/src/tokens/ERC20.sol";

contract SolidityTokenRari is ERC20 {
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 amount
    ) ERC20(_name, _symbol, _decimals) {
        _mint(msg.sender, amount);
    }
}