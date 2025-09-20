let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let second = document.querySelector('.sec');

let interval;
let minute = 1, hours = 1, count = 1;

const startCount = () => {

   //    ?seconds 
    if (count > 60) {
        count = 1;
        second.innerText = `0${count}`;
        if (minute < 9) {
            min.innerText = `0${minute}`
        }
        else {
            min.innerText = minute;
        }
        minute++;
    }

    // ?minutes 
    if (minute > 60) {
        minute = 1;
        min.innerText = `0${minute}`;

        if (hours < 10) {
            hour.innerText = `0${hours}`
        }
        else {
            hour.innerText = hours;
        }
        minute++;
        hours++;
    }

    if (count < 10) {
        second.innerText = `0${count}`;
        count += 1;
    }
    else if (count > 9) {
        second.innerText = count;
        count += 1;
    }
}

const stopCount = () => {
    clearInterval(interval)
}

const resetCount = () => {
    clearInterval(interval);
    hours = 0;
    min = 0;
    count = 0;
    hour.innerText = `00`;
    min.innerText = `00`;
    second.innerText = `00`;
}

start.addEventListener('click', () => {
    interval = setInterval(startCount, 1000)
})

stop.addEventListener('click', stopCount)

reset.addEventListener('click', resetCount)



