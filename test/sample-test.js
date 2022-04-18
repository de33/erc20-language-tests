const { expect } = require("chai");
const hre = require("hardhat");

describe("Token", function () {
  it("Should return the new greeting once it's changed", async function () {
    const accounts = await hre.ethers.getSigners();
    const VyperToken = await ethers.getContractFactory("VyperToken");
    const vyperToken = await VyperToken.deploy("Test", "TEST", 18, 100);
    await vyperToken.deployed();

    const SolidityTokenOZ = await ethers.getContractFactory("SolidityTokenOZ");
    const solidityTokenOZ = await SolidityTokenOZ.deploy();
    await solidityTokenOZ.deployed();

    const SolidityTokenRari = await ethers.getContractFactory("SolidityTokenRari");
    const solidityTokenRari = await SolidityTokenRari.deploy("Test", "Test", 18, "100000000000000000000");
    await solidityTokenRari.deployed();

    console.log(await vyperToken.balanceOf(accounts[0].address));

    await vyperToken.transfer(accounts[1].address, 10);

    console.log(await vyperToken.balanceOf(accounts[1].address));

    console.log(await solidityTokenOZ.balanceOf(accounts[0].address));

    await solidityTokenOZ.transfer(accounts[1].address, 10);

    console.log(await solidityTokenOZ.balanceOf(accounts[1].address));

    console.log(await solidityTokenRari.balanceOf(accounts[0].address));

    await solidityTokenRari.transfer(accounts[1].address, 10);

    console.log(await solidityTokenRari.balanceOf(accounts[1].address));

    //console.log(Token)
    // const erc20 = await Token.deploy();
    // await token.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
