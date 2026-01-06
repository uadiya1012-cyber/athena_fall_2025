// exer 02

let price = [100, 200, 300, 400, 500];
console.log(price);


const discountPrices = price.map(function (price) {
    return price * 0.9;
})
console.log(discountPrices)

let discountPricesFor = []
for (let i = 0; i < price.length; i++) {
    const discount = price[i] * 0.9;
    discountPricesFor.push(discount);
}
console.log(discountPricesFor);


const priceWithTag = price.map(function (price) {
    return `${price}₮`;
});
console.log(priceWithTag)

const priceInDollar = price.map(function (price) {
    return price / 3000;
})
console.log(priceInDollar);