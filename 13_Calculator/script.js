let inputElem = document.getElementById('inputField');
let button = document.querySelectorAll('.calBtn');
let arr = Array.from(button);
let string = '';
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = eval(string);
            inputElem.value = string;
        }
        else if (e.target.innerText == 'AC') {
            string = '';
            inputElem.value = string;
        }
        else if (e.target.innerText == 'DELL') {
            string = string.substring(0, string.length - 1);
            inputElem.value = string;
        }
        else
            string += e.target.innerText;
            inputElem.value = string;
    })
})
