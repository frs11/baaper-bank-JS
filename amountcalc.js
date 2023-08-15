// Deposit Money
document.getElementById('depositButton').addEventListener('click', function()
{
    let givenAmount = parseFloat(document.getElementById('depositAmountHolder').value);
    let amountDeposit = parseFloat(document.getElementById('depositAmount').innerText);
    let amountBalance = parseFloat(document.getElementById('balanceAmount').innerText);
    amountDeposit += givenAmount;
    amountBalance += givenAmount;
    document.getElementById('depositAmount').innerText = amountDeposit;
    document.getElementById('balanceAmount').innerText = amountBalance;

    document.getElementById('depositAmountHolder').value ='';


    console.log(amountDeposit, amountBalance);
})
// Withdraw Money
document.getElementById('withdrawButton').addEventListener('click', function()
{
    let givenAmount = parseFloat(document.getElementById('withdrawAmountHolder').value);
    let amountWithdraw = parseFloat(document.getElementById('withdrawAmount').innerText);
    let amountBalance = parseFloat(document.getElementById('balanceAmount').innerText);
    amountWithdraw += givenAmount;
    amountBalance -= givenAmount;
    document.getElementById('withdrawAmount').innerText = amountWithdraw;
    document.getElementById('balanceAmount').innerText = amountBalance;

    document.getElementById('withdrawAmountHolder').value ='';


    console.log(amountWithdraw, amountBalance);
})
// Loan Money
document.getElementById('loanButton').addEventListener('click', function()
{
    let givenAmount = parseFloat(document.getElementById('loanAmountHolder').value);
    let amountLoan = parseFloat(document.getElementById('loanAmount').innerText);
    let amountBalance = parseFloat(document.getElementById('balanceAmount').innerText);
    amountLoan += givenAmount;
    amountBalance -= givenAmount;
    document.getElementById('loanAmount').innerText = amountLoan;
    document.getElementById('balanceAmount').innerText = amountBalance;

    document.getElementById('loanAmountHolder').value ='';


    console.log(amountLoan, amountBalance);
})

