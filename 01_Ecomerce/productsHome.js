let productContainer = document.querySelector('.productContainer');
let product_template = document.querySelector('.product_template');

import { addToCartBtn } from './addToCart';
import products from './api/product.json';
import { quantityBtnToggle } from './quantityBtnToggle';

export const showProducts = () => {
    if (!products) {
        return false;
    }
    products.forEach((curProd) => {
        const { id, name,rating, category, price, stock, description, image } = curProd;
        let productClone = document.importNode(product_template.content, true);
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('img').src = image;
        productClone.querySelector('img').alt = name;
        productClone.querySelector('.productName').textContent = name;
        let Rating = productClone.querySelector('.rating');
        for (let i = 1; i <= rating; i++){
            let star = document.createElement('i');
            star.innerText = '*';
            Rating.append(star);
        }

        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.price').textContent = `$${price}`;
        productClone.querySelector('.actualPrice').textContent = `$${price * 4}`;
        productClone.querySelector('.totalStock').textContent = stock;

        productClone.querySelector('.card').setAttribute('id', `card${id}`);

        productClone.querySelector('.productQuantity').addEventListener('click', (event) => {
            quantityBtnToggle(event, id, stock);
        })

        productClone.querySelector('.addToCartProductBtn').addEventListener('click', (event) => {
            addToCartBtn(event, id, stock);
        })

        productContainer.append(productClone);
    })
}

