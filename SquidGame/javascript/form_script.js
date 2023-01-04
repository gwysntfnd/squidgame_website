const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');
const submit = document.getElementById('submit')
const register = document.getElementById('register')


submit.onclick = function()
{
    
    window.location.href = "main.html";
}

register.onclick = function()
{
    alert('Done');
    
}

signupBtn.onclick = function()
{
    formBx.classList.add('active')
    body.classList.add('active')
}
signinBtn.onclick = function()
{
    formBx.classList.remove('active')
    body.classList.remove('active')
}




  