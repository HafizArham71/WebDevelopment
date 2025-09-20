let inputElem = document.getElementById('myInput');
let inputValue = document.querySelector('.inputValue');
let inputName = document.querySelector('.inputName');
let inputType = document.querySelector('.inputType');
let eventType = document.querySelector('.eventType');
const inputInfo = (event) => {
    inputValue.innerHTML = `Input value: ${event.target.value}`
    inputName.innerHTML = `Input name: ${event.target.name}`
    inputType.innerHTML = `Input type: ${event.inputType}`
    eventType.innerHTML = `Event Type: ${event.type}`
};
inputElem.addEventListener('change', inputInfo); 