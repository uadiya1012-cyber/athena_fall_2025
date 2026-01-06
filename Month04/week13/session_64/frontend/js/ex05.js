// exercise method chaining

let products = [
    { name: 'Laptop', price: 1000, inStock: true, category: 'Electronics' },
    { name: 'Phone', price: 500, inStock: false, category: 'Electronics' },
    { name: 'Shirt', price: 30, inStock: true, category: 'Clothing' },
    { name: 'Shoes', price: 80, inStock: true, category: 'Clothing' },
    { name: 'Watch', price: 200, inStock: false, category: 'Accessories' }
];

// TODO: Нэг chain дотор

const filteredProducts =
    products.filter(function (product) {
        // 1. In stock бүтээгдэхүүн шүүх
        if (product.inStock) {
            return product;
        }
    }).map(function (product) {
        // 2. 10% хөнгөлөх
        product.price = product.price * 0.9;
        return product;
    }).sort(function (productA, productB) {
        // 3. Үнээр эрэмбэлэх (sort)
        return productA.price - productB.price;
    }).map(function (product) {
        // 4. Зөвхөн нэр ба үнэ агуулсан object-уудыг буцаах
        const namePrice = {
            name: product.name,
            price: product.price
        }
        return namePrice;
    });

console.log(filteredProducts);



