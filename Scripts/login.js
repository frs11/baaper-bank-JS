//Login Process

document.getElementById('loginButton').addEventListener('click', function()
{
    let givenUserEmail = document.getElementById('userEmailHolder').value;
    let givenPassword = document.getElementById('userPasswordHolder').value;

    if(!givenUserEmail.length >0 || !givenPassword.length >0)
    {
        alert('Please Fill Up all information')
    }      
    else
    {
        for(let i = 0; i < userName.length; i++)
        {
            if(userEmail[i] !== givenUserEmail && userPassword[i] !== givenPassword)
            {
                alert('This email does not have an account. Please create an account first');
            }
            else if(userEmail[i] !== givenUserEmail || userPassword[i] !== givenPassword)
            {
                alert('Please insert valid information');
            }
            else
            {
                console.log(userName[i], userEmail[i], userPassword[i]);
            }
            
        }
        window.location.href = "homepage.html";
        
    }
})

