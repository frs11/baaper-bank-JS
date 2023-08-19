//Empty Array to store user information

let userName = [];
let userEmail = [];
let userPassword = [];

//Registration Process
document.getElementById('registrationButton').addEventListener('click', function()
{
    let givenUserName = document.getElementById('fullNameHolder').value
    let givenUserEmail = document.getElementById('emailHolder').value;
    let firstPassword = document.getElementById('passwordHolder').value;
    let secondPassword = document.getElementById('confirmPasswordHolder').value;

    if(!givenUserName.length >0 || !givenUserEmail.length >0 || !firstPassword.length >0 || !secondPassword.length >0)
    {
        alert('Please Fill Up all information')
    }
    else if(!firstPassword.length >=8 || !secondPassword.length >=8)
    {
        alert('Password too short. Password must be at least 8 characters long.');
    }
    else
    {
        if(firstPassword !== secondPassword)
        {
            alert('Please Input Matching Password');
        }
        else
        {
            userName.push(givenUserName);
            document.getElementById('fullNameHolder').value = ''
            userEmail.push(givenUserEmail);
            document.getElementById('emailHolder').value = ''
            userPassword.push(firstPassword);
            document.getElementById('passwordHolder').value = ''
            document.getElementById('confirmPasswordHolder').value = ''

            window.location.href = "login-page.html";
        }

    }
})
