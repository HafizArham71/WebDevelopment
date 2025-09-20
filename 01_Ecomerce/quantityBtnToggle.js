export const quantityBtnToggle = (event,id,stock) => {
    const currCard = document.querySelector(`#card${id}`);
    let noOfProduct = currCard.querySelector('.noOfProduct');
    let quantity = noOfProduct.innerText;
    if (event.target.innerText === '+') {
        if (quantity < stock) {
            quantity++;
            noOfProduct.innerText = quantity;
        }
        else if (quantity === stock) {
            quantity = stock;
            noOfProduct.innerText = quantity;
        }
    }
    if (event.target.innerText === '-') {
        if (quantity > 1) {
            quantity--;
            noOfProduct.innerText = quantity;
        }
    }
}