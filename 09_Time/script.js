let currTime;

const time = (() => {
    currTime = new Date().toLocaleTimeString();
    document.querySelector('.para').innerHTML = `${currTime}`;
})

time();
setInterval(time, 1000);