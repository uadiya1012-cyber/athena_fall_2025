// Даалгавар 1

// let numbers = [5, 10, 15, 20, 25, 30];

// 1. Эхний элементийг хэвлэ
// console.log("Эхний элемент:", numbers[0]);

// 2. Сүүлчийн элементийг хэвлэ (length ашигла)
// console.log("Сүүлчийн элемент:", numbers[numbers.length - 1]);

// 3. 35 тоог нэм (push)
// numbers.push(35);
// console.log("35 нэмсний дараа:", numbers);

// 4. 0 тоог эхэнд нэм (unshift)
// numbers.unshift(0);
// console.log("0-ийг эхэнд нэмсний дараа:", numbers);

// 5. For loop-оор бүх элементийг хэвлэ
// console.log("Бүх элемент:");
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// 6. Элемент бүрийг 2-оор үржүүл (for loop ашигла)
// let multiplied = [];
// for (let i = 0; i < numbers.length; i++) {
//     multiplied.push(numbers[i] * 2);
// }
// console.log("2-р үржүүлсэн:", multiplied);


// Даалгавар 2
// let prices = [100, 200, 300, 400, 500];

// 1. 10% хөнгөлөх
// let discounted = prices.map(price => price * 0.9);
// console.log(discounted);

// 2. ₮ тэмдэг нэмэх
// let withCurrency = prices.map(price => `${price}₮`);
// console.log(withCurrency);

// 3. USD руу хөрвүүлэх (÷3000)
// let toUSD = prices.map(price => (price / 3000).toFixed(2));
// console.log(toUSD);

// Даалгавар 3

// let students = [
//     { name: 'Болд', grade: 85 },
//     { name: 'Сарнай', grade: 92 },
//     { name: 'Дорж', grade: 78 },
//     { name: 'Оюука', grade: 88 },
//     { name: 'Батаа', grade: 65 }
// ];

// 1. 80+ оюутнууд
// let passed = students.filter(student => student.grade >= 80);
// console.log(passed);

// 2. Тэдний нэрс
// let passedNames = passed.map(student => student.name);
// console.log(passedNames);

// 3. 70-аас доош дүнтэй оюутнууд
// let failed = students.filter(student => student.grade < 70);
// console.log(failed);

// Даалгавар 4

// let scores = [85, 92, 78, 95, 88, 73, 90];

// 1. Нийлбэр
// let sum = scores.reduce((a, b) => a + b, 0);
// console.log("Нийлбэр:", sum);

// 2. Дундаж
// let average = sum / scores.length;
// console.log("Дундаж:", average.toFixed(2));

// 3. Хамгийн өндөр дүн
// let maxScore = scores.reduce((max, current) =>
//     current > max ? current : max
// );
// console.log("Хамгийн өндөр:", maxScore);

// 4. Хамгийн бага дүн
// let minScore = scores.reduce((min, current) =>
//     current < min ? current : min
// );
// console.log("Хамгийн бага:", minScore);

// Даалгавар 5
// let products = [
//     { name: 'Laptop', price: 1000, inStock: true, category: 'Electronics' },
//     { name: 'Phone', price: 500, inStock: false, category: 'Electronics' },
//     { name: 'Shirt', price: 30, inStock: true, category: 'Clothing' },
//     { name: 'Shoes', price: 80, inStock: true, category: 'Clothing' },
//     { name: 'Watch', price: 200, inStock: false, category: 'Accessories' }
// ];

// 1. In stock бүтээгдэхүүн шүүх
// let step1 = products.filter(product => product.inStock);
// console.log("1. In Stock:", step1);

// 2. 10% хөнгөлөх
// let step2 = step1.map(product => ({
//     ...product,
//     price: product.price * 0.9
// }));
// console.log("2. 10% хөнгөлсөн:", step2);

// 3. Үнээр эрэмбэлэх
// let step3 = step2.sort((a, b) => a.price - b.price);
// console.log("3. Үнээр эрэмбэлсэн:", step3);

// 4. Зөвхөн name ба price үлдээх
// let step4 = step3.map(product => ({
//     name: product.name,
//     price: product.price
// }));
// console.log("4. Зөвхөн name & price:", step4);


// Даалгавар 6
// let text = "JavaScript is great JavaScript is fun JavaScript is powerful";

// 1. Үгүүдэд хуваах
// let words = text.split(" ");
// console.log("1. Words:", words);

// 2. Үг бүрийн давтамжийг тоолох
// let frequency = words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
// }, {});
// console.log("2. Frequency:", frequency);

// 3. Хамгийн их давтагдсан үгийг олох
// let mostFrequentWord = Object.keys(frequency).reduce((a, b) =>
//     frequency[a] > frequency[b] ? a : b
// );
// console.log("3. Most Frequent Word:", mostFrequentWord);


// Даалгавар 7

Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        // 2. callback(element, index, originalArray)
        let newValue = callback(this[i], i, this);

        // 3. Шинэ массив руу түлхэнэ
        result.push(newValue);
    }

    return result;
};



Array.prototype.myFilter = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};


Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;


    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }


    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.myMap(x => x * 2));


console.log(numbers.myFilter(x => x % 2 === 0));


console.log(numbers.myReduce((a, b) => a + b, 0));

