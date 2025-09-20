// *Header on Scroll Bg Change 

let container = document.querySelector('.container');
let header = document.querySelector('header');

window.addEventListener('scroll', e => header.classList.toggle('boxShadow', scrollY >= 15)); 
