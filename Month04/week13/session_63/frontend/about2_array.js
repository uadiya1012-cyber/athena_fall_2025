// map() method

// let newArray = array.map(function (element) {
//     return transformedElement;
// });

// Arrow function (богино)
// let newArray = array.map(element => transformedElement);

// map() (орчин үеийн арга):
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);

// console.log(doubled);
// [2, 4, 6, 8, 10]


// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6]
// console.log(numbers); // анхны төлөв өөрчлөгдөөгүй!


// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);

// console.log(doubled);
// [2, 4, 6, 8, 10]


// let numbers = [1, 2, 3, 4, 5];
// let squared = numbers.map(num => num * num);

// console.log(squared);
// [1, 4, 9, 16, 25]

// let users = [
//     { name: 'Bold', age: 20 },
//     { name: 'Sarnai', age: 22 },
//     { name: 'Dorj', age: 19 }
// ];

// zuwhun neruud
// let names = users.map(user => user.name);
// console.log(names);
// ['Bold', 'Sarnai', 'Dorj']
// zuwhun nas
// let ages = users.map(user => user.age);
// console.log(ages);
// [20, 22, 19]


// let names = ['Bold', 'Sarnai', 'Dorj'];
// let greetings = names.map(name => `Sain uu, ${name}!`);
// console.log(greetings);
// ['Sain uu, Bold!', 'Sain uu, Sarnai!', 'Sain uu, Dorj!']


// let products = [
//     {name: 'Laptop', price: 1000},
//     {name: 'Mouse', price: 30}
// ];

// 10% hungulult
// let discounted = products.map(product => ({
//     name: product.name,
//     price: product.price * 0.9,
//     originalPrice: product.price
// }));

// console.log(discounted);
// [
//     {name: 'Laptop', price: 900, originalPrice: 1000},
//     {name: 'Mouse', price: 27, originalPrice: 30}
// ]

// let newArray = array.filter(function(element){
//     return condition; // true/false 
// });

// Arrow function
// let newArray = array.filter(element => condition);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);
// [2, 4, 6, 8, 10]


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);
// [1, 3, 5, 7, 9]


// let people = [
//     {name: 'Болд', age: 17},
//     {name: 'Сарнай', age: 22},
//     {name: 'Дорж', age: 19},
//     {name: 'Ану', age: 16}
// ];

// 18+ насны хүмүүс
// let adults = people.filter(person => person.age >= 18);
// console.log(adults);
// [{name: 'Сарнай', age: 22}, {name: 'Дорж', age: 19}]


// let products = [
//     {name: 'Laptop', price: 1000},
//     {name: 'Mouse', price: 30},
//     {name: 'Keyboard', price: 80}
// ];

// 100-аас хямд
// let affordable = products.filter(product => product.price < 100);
// console.log(affordable);
// [{name: 'Mouse', price: 30}, {name: 'Keyboard', price: 80}]



// let words = ['сайн', '', 'байна', '', 'уу'];
// let filtered = words.filter(word => word);

// console.log(filtered);
// ['сайн', 'байна', 'уу']


// let result = array.reduce(function(accumulator, currentValue) {
//     return newAccumulator;
// }, initialValue);

// Arrow function
// let result = array.reduce((acc, curr) => acc + curr, initialValue);


// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);// 15


// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);
// 15


// let numbers = [2, 3, 4];
// let product = numbers.reduce((total, num) => total * num, 1);

// console.log(product);
// 24 (2 × 3 × 4)



// let numbers = [5, 12, 8, 130, 44];
// let max = numbers.reduce((maximum, num) => {
//     return num > maximum ? num : maximum;
// }, numbers[0]);

// console.log(max);
// 130


// let fruits = ['алим', 'банана', 'алим', 'черри', 'банана', 'алим'];

// let count = fruits.reduce((obj, fruit) => {
//     obj[fruit] = (obj[fruit] || 0) + 1;
//     return obj;
// }, {});

// console.log(count);
// {алим: 3, банана: 2, черри: 1}


// let students = ['Болд', 'Сарнай', 'Дорж'];

// let attendance = students.reduce((obj, name) => {
//     obj[name] = 'ирсэн';
//     return obj;
// }, {});

// console.log(attendance);
// {Болд: 'ирсэн', Сарнай: 'ирсэн', Дорж: 'ирсэн'}


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Тэгш → ×2 → Нийлбэр
// let result = numbers
//     .filter(num => num % 2 === 0)// [2, 4, 6, 8, 10]
//     .map(num => num * 2)// [4, 8, 12, 16, 20]
//     .reduce((sum, num) => sum + num, 0);// 60

// console.log(result);// 60


// let products = [
//     { name: 'Laptop', price: 1000, inStock: true },
//     { name: 'Phone', price: 500, inStock: false },
//     { name: 'Mouse', price: 30, inStock: true },
//     { name: 'Keyboard', price: 80, inStock: true }
// ];

// // In stock → 10% хөнгөлөх → Нийт үнэ
// let total = products
//     .filter(p => p.inStock)
//     .map(p => p.price * 0.9)
//     .reduce((sum, price) => sum + price, 0);

// console.log(`Нийт: ${total}₮`);// Нийт: 999₮













