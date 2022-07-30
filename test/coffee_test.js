const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CoffeePortal", function() {
    it("Should be able to deploy a contract", async function (){
        const CoffeePortal = await ethers.getContractFactory("CoffeePortal");
        const coffeePortal = await CoffeePortal.deploy();
        expect(coffeePortal.address).to.be.a("string");

    })
});