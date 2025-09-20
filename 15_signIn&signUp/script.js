let heading = document.getElementById('heading');
let signUpBtn = document.getElementById('signUpBtn');
let signInBtn = document.getElementById('signInBtn');
let bar = document.querySelector('.bar')
let inputParentBox = document.getElementById('inputParentBox');
let password = document.getElementById('password');
let lock = document.getElementById('lock')
let eyeOff = document.getElementById('eyeOff')
let eyeOn = document.getElementById('eyeOn')
let name = document.getElementById('name');

let speech = new SpeechSynthesisUtterance();

//? Loader

let preloader = document.getElementById('loader');
function myFunction() {
    preloader.style.display = 'none';
}

signInBtn.addEventListener('click', () => {
    heading.innerText = 'Sign In';
    bar.style.transform = 'translate(45px)';
    inputParentBox.style.display = 'none';
    speech.text = signInBtn.innerText;
    window.speechSynthesis.speak(speech)
    bar.style.marginTop = '-3.5rem';
    signInBtn.classList.add('disabled');
    signUpBtn.classList.remove('disabled');
})
signUpBtn.addEventListener('click', () => {
    heading.innerText = 'Sign Up';
    bar.style.transform = 'translate(0)';
    inputParentBox.style.display = 'flex';
    speech.text = signUpBtn.innerText;
    window.speechSynthesis.speak(speech)
    bar.style.marginTop = '0';
    signInBtn.classList.remove('disabled');
    signUpBtn.classList.add('disabled');
})
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
speech.text = 'Hello My Name is Hafiz Arham Mujahid Ali';
window.speechSynthesis.speak(speech);
