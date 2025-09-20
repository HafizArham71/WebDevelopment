//? Api 

let pElem = document.querySelector('p');
let btn = document.querySelector('button');
let container = document.querySelector('.container');

// *Joke Using Promises
// const apiUrl = 'https://icanhazdadjoke.com';
// let fetchData = () => {
//     fetch(apiUrl, {
//         headers: {
//             Accept: 'Application/json',
//         }
//     }).then(res => res.json())
//         .then(data => pElem.innerText = data.joke)
//         .catch(error => pElem.innerText = `${error}`)
// };

// *Joke using Acync Await
const apiUrl = 'https://icanhazdadjoke.com';
let fetchData = async () => {
    try {
        let res = await fetch(apiUrl, {
            headers: {
                Accept: 'application/json',
            }
        });
        let data = await res.json();
        pElem.innerText = data.joke;
    } catch(error) {
        pElem.innerText =`${error} due to internet`;
    }
};

fetchData();
btn.addEventListener('click', fetchData);
