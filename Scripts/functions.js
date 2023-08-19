function getInputAmount(inputAmount)
{
    const givenAmount = parseFloat(document.getElementById(inputAmount).value);
    let twoDigitAmount = givenAmount.toFixed(2);
    twoDigitAmount = parseFloat(twoDigitAmount);
    return twoDigitAmount;
}

function getInnerTextAmount(previousAmount)
{
    const decimalAmount = parseFloat(document.getElementById(previousAmount).innerText);
    let twoDigitAmount = decimalAmount.toFixed(2);
    twoDigitAmount = parseFloat(twoDigitAmount);
    return twoDigitAmount;
}

function setInnerTextAmount(location, amount)
{
    amount = parseFloat(amount); 
    amount = amount.toFixed(2);
    amount = parseFloat(amount);
    document.getElementById(location).innerText = amount;
}

function clearValue(idName)
{
    document.getElementById(idName).value ='';
}

