let winds = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let droplet = document.querySelector('.droplet');
let feelsLike = document.querySelector('.feelsLike');
let pressure = document.querySelector('.pressure');
let inputElem = document.getElementById('inputField');
let weatherIcon = document.querySelector('.weatherIcon');
let dayDateTime = document.querySelector('.dayDateTime');
let minMaxTemp = document.querySelector('.minMaxTemp');
let countryAndCity = document.querySelector('.countryAndCity');
let weatherForcast = document.querySelector('.weatherForcast');

//? To Get The Country Name 
let getCountryCode = (code) => {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}

// ?To Get The Date And Time 
const getDate = (dt) => {
    let currDate = new Date(dt * 1000);
    const options = {
        weekDay: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }
    let formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(currDate);
}
let city = 'lahore';
let getCity = () => {
    city = inputElem.value;
    fetchData();
    inputElem.value = '';
}
inputElem.addEventListener('change', getCity)

let fetchData = async () => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a0b06669a793506ae54060f7df8a5fb6`;
        let res = await fetch(apiUrl, {
            headers: {
                Accept: 'Application',
            }
        });
        let data = await res.json();
        console.log(data);
        const { main, name, weather, wind, sys, dt } = data;

        countryAndCity.innerText = `${name}, ${getCountryCode(sys.country)}`;
        dayDateTime.innerText = getDate(dt);
        weatherForcast.innerText = `${weather[0].main}`;
        temp.innerHTML = `${(main.temp-273).toFixed()}&#176C`;
        minMaxTemp.innerHTML = `Min: ${(main.temp_min - 273).toFixed()}&#176C    &ensp;&ensp;&ensp;        Max: ${(main.temp_max - 273).toFixed()}&#176C`;
        feelsLike.innerHTML = `${(main.feels_like - 273).toFixed()}&#176 C`;
        droplet.innerHTML = `${main.humidity.toFixed()}%`;
        winds.innerText = `${wind.speed} m/s`;
        pressure.innerHTML = `${main.pressure.toFixed()}hPa`;
        weatherIcon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" width='100px'>`;

    } catch (error) {
        countryAndCity.innerText = `${error} due to Internet!`;
    }
}
fetchData();
document.getElementById('btn').addEventListener('click', fetchData);