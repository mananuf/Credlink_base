import { ethers } from 'hardhat';

async function main() {
  const CredLinkToken = await ethers.deployContract('CredLinkToken');

  await CredLinkToken.waitForDeployment();

  console.log('CredLinkToken Contract Deployed at ' + await CredLinkToken.getAddress());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});