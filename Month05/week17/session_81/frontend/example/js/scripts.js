export function fetchProducts() {
    return fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error fetching products:', error));
}

export default async function fetchAsyncProductById() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
}