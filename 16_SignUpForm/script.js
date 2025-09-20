
let signUpSignInBtn = document.querySelector(".signUpSignInBtn");
let heading = document.querySelector("h1");
let nameField = document.querySelector("#name");
let underLine = document.querySelector(".underLine");
let password = document.querySelector("#Password");
let eyeOn = document.querySelector("#eyeOn");
let eyeOff = document.querySelector("#eyeOff");
let inputParent = document.querySelector(".input");
let preloader = document.querySelector("#loader");

let check = 0;

const signInSignUpToggle = () => {
    if (check == 0) {
        signUpSignInBtn.innerText = 'Sign Up';
        heading.innerText = 'Sign In';
        nameField.style.transition = "all 0.5s ease-in-out";
        nameField.style.opacity = 0;
        nameField.style.display = "none";
        underLine.style.right = '0';
        underLine.style.transform = 'translateX(0)';
        check = 1;
    }
    else {
        signUpSignInBtn.innerText = 'Sign In';
        heading.innerText = 'Sign Up';
        nameField.style.transition = "all 0.5s ease-in-out";
        nameField.style.opacity = 1;
        nameField.style.display = "inline-block";
        underLine.style.right = '50%';
        underLine.style.transform = 'translateX(50%)';
        check = 0;
    }
}

const eyeOnToggle = () => {
    password.setAttribute('type', 'text')
    eyeOff.style.display = "none";
    eyeOn.style.display = "inline-block";
}

const eyeOffToggle = () => {
    password.setAttribute('type', 'password')
    eyeOff.style.display = "inline-block";
    eyeOn.style.display = "none";
}

const loader = () => {
    preloader.style.display = "none";
}

window.addEventListener("load", loader)
signUpSignInBtn.addEventListener("click", signInSignUpToggle)
heading.addEventListener("click", signInSignUpToggle)
eyeOff.addEventListener("click", eyeOnToggle)
eyeOn.addEventListener("click", eyeOffToggle)``

