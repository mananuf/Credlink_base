import { ethers } from "hardhat";

async function main() {
    const CredLinkTokenAddress = "0x233A66dB39b5BA93993383b2B4E08E6FA81be8AB";
    const CredLinkToken = await ethers.getContractAt("IERC20", CredLinkTokenAddress);

    const CredLinkContractAddress = "0x9F94722FCD154C9372Cf775AA21A60E77a0168DF";
    const CredLink = await ethers.getContractAt("ICredLink", CredLinkContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await CredLinkToken.approve(CredLink, approvalAmount);
    approveTx.wait();

    
    console.log("=============================================================");
    console.log("Approval to spend token completed");

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction

    const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance beefore:::", contractBalanceBeforeWithdrawal);

    const withdrawAmount = ethers.parseUnits("100", 18);
    const withdrawTx = await saveERC20.withdraw(withdrawAmount);

    console.log(withdrawTx);

    withdrawTx.wait();

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();

    console.log("Contract balance after withdrawal:::", contractBalanceAfterWithdrawal);


    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
