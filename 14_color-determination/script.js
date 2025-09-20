// ?References

let outputBox = document.querySelector('.outputBox');
let inputElem = document.querySelector('.inputField');
let getColor = document.querySelector('.getColor');

// ?Function

let handleInput = () => {
    if (inputElem.value.includes(',')) {
        let directions = ['right', 'left', 'top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'];
        let randomDirection = directions[Math.floor(Math.random(directions) * 10)]
        outputBox.style.background = `linear-gradient(to ${randomDirection},${inputElem.value})`;
    }
    else {
        outputBox.style.backgroundColor = inputElem.value;
    }
}
let color,code;
let hexcode = () => {
    color  = '0123456789abcdef';
    code = '';
    for (let i = 1; i <= 6; i++){
        code += color[Math.floor(Math.random(color) * 16)];
    }
    code = '#' + code;
    return code;
}

const insertColor = () => {
    inputElem.value = hexcode();
    outputBox.style.backgroundColor = inputElem.value;
}

// ?Events and Function Call

inputElem.addEventListener('change', handleInput)
getColor.addEventListener('click' , insertColor)
