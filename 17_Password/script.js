const { buttonEvent } = require("../../practice/script5");

export let usernameInputBox = document.getElementById('userName');
export let passwordInputBox = document.getElementById('password');
let submitBtn = document.getElementById('submit');
export let wrong = document.getElementById('wrong');
let invalid = document.getElementById('invalid');
let eyeOff = document.getElementById('eyeOff')
let eyeOn = document.getElementById('eyeOn')
eyeOn.addEventListener('click', () => {
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'flex';
    password.setAttribute('type', 'password');

})
eyeOff.addEventListener('click', () => {
    eyeOn.style.display = 'flex';
    eyeOff.style.display = 'none';
    password.setAttribute('type', 'text');
})

submitBtn.addEventListener('click', buttonEvent)
// usernameInputBox.addEventListener('change', buttonEvent)
// passwordInputBox.addEventListener('change', buttonEvent)

