// &1Accessing Elements 
let login = document.getElementById('login')
let signup = document.getElementById('signup')
let btnSignup = document.getElementById('btnSignup')
let btnLogin = document.getElementById('btnLogin')
let eyeOn1 = document.getElementById('eyeOn1')
let eyeOff1 = document.getElementById('eyeOff1')
let eyeOn2 = document.getElementById('eyeOn2')
let eyeOff2 = document.getElementById('eyeOff2')
let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')

// &Functions Define

const goToSignUp = () => {
    login.style.left = '-100%';
    signup.style.left = '0';
    signup.style.top = '0';
}
const goToLogin = () => {
    login.style.left = '0';
    login.style.top = '0';
    signup.style.left = '100%';
}
const offEye1 = () => {
    eyeOff1.style.display = 'inline-block';
    eyeOn1.style.display = 'none';
    password1.setAttribute('type', 'password')
}
const onEye1 = () => {
    eyeOff1.style.display = 'none';
    eyeOn1.style.display = 'inline-block';
    password1.setAttribute('type', 'text')
}
const offEye2 = () => {
    eyeOff2.style.display = 'inline-block';
    eyeOn2.style.display = 'none';
    password2.setAttribute('type', 'text')
}
const onEye2 = () => {
    eyeOff2.style.display = 'none';
    eyeOn2.style.display = 'inline-block';
    password2.setAttribute('type', 'password')
}

// &Function Call 

btnSignup.addEventListener('click', goToSignUp)
btnLogin.addEventListener('click', goToLogin)
eyeOff1.addEventListener('click', onEye1)
eyeOn1.addEventListener('click', offEye1)
eyeOff2.addEventListener('click', onEye2)
eyeOn2.addEventListener('click', offEye2)


