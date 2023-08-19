
// Deposit Money
document.getElementById('depositButton').addEventListener('click', function()
{
    let givenAmount = getInputAmount('depositAmountHolder');

    if(isNaN(givenAmount))
    {
        alert('Please Insert Amount First');
        clearValue('depositAmountHolder');
    }
    else if(givenAmount <= 0)
    {
        alert('Inserted Amount can not be Negative or Zero');
        clearValue('depositAmountHolder');
    }
    else
    {
        let amountDeposit = getInnerTextAmount('depositAmount');
        let amountBalance = getInnerTextAmount('balanceAmount');
        let loanBalance = getInnerTextAmount('loanAmount');
        let tempAmountStorage = givenAmount;

        if(givenAmount <= loanBalance)
        {
            loanBalance -= givenAmount;
            amountDeposit += givenAmount;
            setInnerTextAmount('depositAmount', amountDeposit);
            setInnerTextAmount('loanAmount', loanBalance);
            clearValue('depositAmountHolder');
        }
        else
        {
            if (loanBalance === 0)
            {
                amountDeposit += givenAmount;
                amountBalance += givenAmount;

                setInnerTextAmount('depositAmount', amountDeposit);
                setInnerTextAmount('balanceAmount', amountBalance);
                clearValue('depositAmountHolder');    
            }
            else
            {
                givenAmount -= loanBalance;
                tempAmountStorage -= givenAmount;
                loanBalance -= tempAmountStorage;
                amountDeposit += givenAmount;
                amountBalance += givenAmount;

                setInnerTextAmount('depositAmount', amountDeposit);
                setInnerTextAmount('loanAmount', loanBalance);
                setInnerTextAmount('balanceAmount', amountBalance);
                clearValue('depositAmountHolder');
        
            }
            
        }
    }
})
// Withdraw Money
document.getElementById('withdrawButton').addEventListener('click', function()
{
    let givenAmount = getInputAmount('withdrawAmountHolder');

    if(isNaN(givenAmount))
    {
        alert('Please Insert Amount First');
        clearValue('withdrawAmountHolder');
    }
    else if(givenAmount <= 0)
    {
        alert('Amount can not be Negative Zero');
        clearValue('withdrawAmountHolder');
    }
    else
    {
        let amountWithdraw = getInnerTextAmount('withdrawAmount');
        let amountBalance = getInnerTextAmount('balanceAmount');

        if(givenAmount > amountBalance)
        {
            alert('insufficient Balance.');
            clearValue('withdrawAmountHolder');
        }
        else
        {
            amountWithdraw += givenAmount;
            amountBalance -= givenAmount;
        
            setInnerTextAmount('withdrawAmount', amountWithdraw);
            setInnerTextAmount('balanceAmount', amountBalance);
        
            clearValue('withdrawAmountHolder');    
        }
    }
})
// Loan Money
document.getElementById('loanButton').addEventListener('click', function()
{
    let givenAmount = getInputAmount('loanAmountHolder');
    
    if(isNaN(givenAmount))
    {
        alert('Please Insert Amount First');
        clearValue('loanAmountHolder');
    }
    else if(givenAmount <= 0)
    {
        alert('Inserted Amount can not Negative Value or Zero');
        clearValue('loanAmountHolder');
    }
    else
    {
        let amountLoan = getInnerTextAmount('loanAmount');
        let amountBalance = getInnerTextAmount('balanceAmount');
        let tempAmountStorage = amountLoan + givenAmount;
        if(tempAmountStorage > 50000)
        {
            alert('You can not take any more loan. Please repay previous loan first');
            clearValue('loanAmountHolder');
        }
        else
        {
            amountLoan += givenAmount;
            amountBalance += givenAmount;
            setInnerTextAmount('loanAmount', amountLoan);
            setInnerTextAmount('balanceAmount', amountBalance);
        
            clearValue('loanAmountHolder');
    
        }
    }
})