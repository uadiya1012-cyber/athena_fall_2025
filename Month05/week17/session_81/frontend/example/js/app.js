import { fetchProducts } from './scripts.js';
import fetchAsyncProducts from './scripts.js';
const result = fetchProducts

const modal = document.getElementById('my-modal');
const closeBtn = document.getElementsByClassName('close-button')[0];

closeBtn.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const results = fetchProducts();
console.log(results);
results.then((data) => {
    console.log(data);
});

const products = await fetchAsyncProducts();
const productsContainerElement = document.getElementById('product-container');
function renderProducts(prods) {
    for (let i = 0; i < prods.length; i++) {
        const prodContainer = document.createElement('div');
        const prodTitle = document.createElement('h3');
        const prodImage = document.createElement('img');

        prodTitle.textContent = prods[i].title;
        prodImage.src = prods[i].images[0];
        prodImage.width = 100;
        prodImage.height = 100;
        prodImage.addEventListener('click', () => showModal(prods[i].id));

        prodContainer.append(prodTitle, prodImage);
        productsContainerElement.appendChild(prodContainer);
    }
}

async function showModal(productId) {
    const URL = `https://dummyjson.com/products/${productId}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    // show modal
    modal.style.display = 'block';

    const modalContent = document.getElementsByClassName('modal-content')[0];
    modalContent.innerHTML = '';

    const prodContainer = document.createElement('div');
    const prodTitle = document.createElement('h3');
    const prodImage = document.createElement('img');

    prodTitle.textContent = data.title;
    prodImage.src = data.images[0];
    prodImage.width = 100;
    prodImage.height = 100;
    prodContainer.appendChild(prodTitle);
    prodContainer.appendChild(prodImage);

    modalContent.appendChild(prodContainer);

}

renderProducts(products);