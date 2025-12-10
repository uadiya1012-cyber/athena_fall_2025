// Дасгал 1
// function square(x) {
//     return x * x;
// }
// function cube(x) {
//     return square(x) * x;
// }

// console.log(cube(2));
// console.log(cube(3));
// console.log(cube(4));

// Дасгал 2
// function double(x) {
//     return x * 2;
// }
// function addOne(x) {
//     return x + 1;
// }
// function doubleThenAddOne(x) {
//     return addOne(double(x));
// }
// Substitution Model (алхамууд):
// doubleThenAddOne(5)
// → addOne(double(5))
// → addOne(10)
// → 10 + 1
// → 11

// console.log(doubleThenAddOne(5)); // 11

// Дасгал 3
// function checkSign(x) {
//     return x > 0 ? "Эерэг" : x < 0 ? "Сөрөг" : "Тэг";
// }

// console.log(checkSign(5));  // Эерэг
// console.log(checkSign(-3)); // Сөрөг
// console.log(checkSign(0));  // Тэг

// Дасгал 4
// function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(10, 5));  // 5
// console.log(min(3, 8));   // 3
// console.log(min(7, 7));   // 7

// Дасгал 5
// function square(x) {
//     return x * x;
// }

// function circleArea(r) {
//     const PI = 3.14159;
//     return PI * square(r);
// }
// console.log(circleArea(5));
// console.log(circleArea(10));


// Дасгал 6
// function f(x) {
//     return x + 2;
// }
// function g(x) {
//     return x * 3;
// }
// function h(x) {
//     return f(g(f(x)));
// }

// h(1)
// - f(g(f(1)))
// - f(g(1 + 2))
// - f(g(3))
// - f(3 * 3)
// - f(9)
// - 9 + 2
// - 11

// console.log(h(1))

// Дасгал 7
// function max(a, b) {
//     return a > b ? a : b;
// }

// function max3(a, b, c) {
//     return max(max(a, b), c);
// }

// console.log(max3(3, 7, 5));
// console.log(max3(10, 2, 8));
// console.log(max3(1, 1, 1));

// Дасгал 8
// function sum(n) {
//     return n <= 0 ? 0 : n + sum(n - 1);
// }

// console.log(sum(5));
// console.log(sum(10));
// console.log(sum(1));
// console.log(sum(0));

// Дасгал 9
// function power(x, n) {
//     return n === 0 ? 1 : x * power(x, n - 1);
// }

// console.log(power(2, 3));
// console.log(power(5, 2));
// console.log(power(3, 4));
// console.log(power(7, 0));

// Дасгал 10

function applyDiscount(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

function applyTax(price, taxPercent) {
    return price + (price * taxPercent) / 100;
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    const afterDiscount = applyDiscount(price, discountPercent);
    return applyTax(afterDiscount, taxPercent);
}

console.log(calculateFinalPrice(100000, 20, 10));
console.log(calculateFinalPrice(50000, 10, 5));
console.log(calculateFinalPrice(200000, 0, 15));






