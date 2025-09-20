import { getArrFromLocalStorage } from "./getArrFromLocalStorage";

getArrFromLocalStorage();

let totalCarts = document.querySelector('.count');
let arrLocal = getArrFromLocalStorage();

export let addToCartBtn = (event, id, stock) => {
    let currCard = document.querySelector(`#card${id}`);
    let price = currCard.querySelector('.price').innerHTML;
    let noOfProduct = currCard.querySelector('.noOfProduct').innerHTML;
    price = price.replace('$', '');
    let existingProd = arrLocal.find(currProd => currProd.id === id);
    if (existingProd) {
        return false;
    }
    let totalPrice = `$${noOfProduct * price}`;
    noOfProduct = Number(noOfProduct)

    arrLocal.push({ id, totalPrice, noOfProduct })

    localStorage.setItem("localArrProd", JSON.stringify(arrLocal))
    totalCarts.innerHTML = `<a href="extra pages/contact.html">
                            ${arrLocal.length}</a>`;
}

totalCarts.innerHTML = `<a href="extra pages/contact.html">
                            ${arrLocal.length}</a>`;