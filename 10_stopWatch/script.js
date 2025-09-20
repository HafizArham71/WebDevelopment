let countDownBtn_Elem = document.querySelector('.countDown');
let start_btnElem = document.querySelector('.start_btn');
let reset_btnElem = document.querySelector('.reset_btn');
let stop_btnElem = document.querySelector('.stop_btn');
let getTime_btnElem = document.querySelector('.getTime_btn');
let clear_btnElem = document.querySelector('.clear_btn');
let resultant = document.querySelector('.resultant')

let count = 1;
let intervalId;
let startCount = (() => {
    intervalId = setInterval(() => {
        countDownBtn_Elem.innerHTML = count++;
    }, 1000)
})

let stopCount = (() => {
    clearInterval(intervalId)
})

const resetCount = () => {
    countDownBtn_Elem.innerHTML = 0;
    count = 0;
    clearInterval(intervalId)
}

const getCount = () => {
    let pElem = document.createElement('p');
    pElem.classList.add('result');
    pElem.innerText = `Time is ${count - 1}`;
    resultant.append(pElem);
    clearInterval(intervalId)
}

const clearCount = () => {
    resultant.innerHTML = '';
}

start_btnElem.addEventListener('click', startCount)
stop_btnElem.addEventListener('click', stopCount)
reset_btnElem.addEventListener('click', resetCount)
getTime_btnElem.addEventListener('click', getCount)
clear_btnElem.addEventListener('click', clearCount)