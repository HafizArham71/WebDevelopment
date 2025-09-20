let inputElem = document.getElementById('myInput');
let keyPressed = document.querySelector('.keyPressed');
let keyCode = document.querySelector('.keyCode');
let charCodeAt = document.querySelector('.charCodeAt');
let eventType = document.querySelector('.eventType');
const keyInfo = (event) => {
    keyPressed.innerHTML = `Key pressed: ${event.key}`
    keyCode.innerHTML = `Key Code: ${event.code}`
    charCodeAt.innerHTML = `Char codeAt: ${event.key.charCodeAt(0)}`
    eventType.innerHTML = `Event type: ${event.type}`
    inputElem.value = '';
};
inputElem.addEventListener('keyup', keyInfo); 