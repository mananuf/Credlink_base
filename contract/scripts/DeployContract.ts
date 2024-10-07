import { ethers } from 'hardhat';

async function main() {
    const CredLinkContractFactory = await ethers.getContractFactory('CredLinkContract');
    

    const CredLinkContract = await CredLinkContractFactory.deploy('0xFbCb2d130Fc1f9753b0FF5B4607FcceCb7AeAc2B');


    await CredLinkContract.waitForDeployment();

    const CredLinkContractAddress = await CredLinkContract.getAddress();


    console.log('CredLinkContract Contract Deployed at:', CredLinkContractAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});