// Яагаад array хэрэгтэй вэ?
// Array-гүй
// let fruit1 = 'apple';
// let fruit2 = 'banana';
// let fruit3 = 'cherry';
// let fruit4 = 'salt';
// ... 100 жимс байвал?

// array ашиглавал
// let fruits = ['apple', 'banana', 'cherry', 'salt'];
// бүгд нэг хувьсагчид!

// Хоосон arraylet emptyArray = [];

// Тоонуудын arraylet numbers = [1, 2, 3, 4, 5];

// Текстийн arraylet fruits = ['алим', 'банана', 'черри'];

// Холимог array (боломжтой!)let mixed = [1, 'текст', true, null];

// let fruitss = ['apple', 'banana', 'cherry'];
// console.log(fruitss.length) // 3

// let fruits = ['алим', 'банана', 'черри', 'давс'];

console.log(fruits[0]);// 'алим' (эхний)
console.log(fruits[1]);// 'банана'
console.log(fruits[2]);// 'черри'
console.log(fruits[3]);// 'давс' (сүүлчийн)
// Байхгүй индекс
console.log(fruits[10]);// undefined
// Сүүлчийнх авах арга
console.log(fruits[fruits.length - 1]);// 'давс'

// let numbers = [10, 20, 30];
console.log(numbers.length);// 3
// ❌ АЛДАА - 3 элемент байгаа бол сүүлчийн index нь 2!
console.log(numbers[3]);// undefined
// ✅ ЗӨВ
console.log(numbers[2]);// 30


let students = ['Болд', 'Сарнай', 'Дорж'];
console.log(students);// ['Болд', 'Сарнай', 'Дорж']

students[1] = 'Оюука';
console.log(students);// ['Болд', 'Оюука', 'Дорж']


// push() - Сүүлд нэмэх

// let fruits = ['алим', 'банана'];
console.log(fruits);// ['алим', 'банана']

fruits.push('черри');
console.log(fruits);// ['алим', 'банана', 'черри']

fruits.push('давс');
console.log(fruits);// ['алим', 'банана', 'черри', 'давс']


// pop() - Сүүлээс хасах

// let fruits = ['алим', 'банана', 'черри'];
console.log(fruits);// ['алим', 'банана', 'черри']
let removed = fruits.pop();
console.log(removed);// 'черри'
console.log(fruits);// ['алим', 'банана']


// unshift() - Эхэнд нэмэх

// let fruits = ['банана', 'черри'];
console.log(fruits);// ['банана', 'черри']

fruits.unshift('алим');
console.log(fruits);// ['алим', 'банана', 'черри']


// shift() - Эхнээс нь хасах
let fruit1 = ['алим', 'банана', 'черри'];
console.log(fruit1); // ['алим', 'банана', 'черри']
let first = fruit1.shift();
console.log(first); // 'алим'
console.log(fruit1); // ['алим', 'черри']

// indexof() - Индекс олох
let fruit2 = ['алим', 'банана', 'черри'];

console.log(fruit2.indexOf('банана'));// 1
console.log(fruit2.indexOf('черри'));// 2
console.log(fruit2.indexOf('давс'));// -1 (байхгүй)
// байхгүй элемент бол -1 буцаана

// includes() агуулж байгаа эсэх
// let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('salt')); // false


// for loop array
// Арга 1: Энгийн for loop
// let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// Гаралт:
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index 3: 40
// Index 4: 50

for (let i = 0; i < numbers.length; i++) {
    //   ↑        ↑                      ↑
    //   эхлэл    нөхцөл                 increment
}

// Арга 2: for...of (Орчин үеийн)
let fruitss = ['apple', 'banana', 'cherry'];

for (let fruit of fruitss) {
    console.log(fruit);
}

// Гаралт
// apple
// banana
// cherry


// for vs for...of:
let fruits = ['алим', 'банана', 'черри'];

// for - Index хэрэгтэй бол
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// for...of - Зөвхөн утга хэрэгтэй бол
for (let fruit of fruits) {
    console.log(fruit);
}


// Арга 3: forEach() method

let students = ['Болд', 'Сарнай', 'Дорж'];

students.forEach(function (student, index) {
    console.log(`${index + 1}. ${student}`);
});

// Гаралт:
// 1. Болд
// 2. Сарнай
// 3. Дорж


// ### **💡 Практик жишээнүүд**
// **Жишээ 1: Нийлбэр тооцоолох**

let scores = [85, 92, 78, 95, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;
console.log(`Нийлбэр: ${sum}`);
// Нийлбэр 438
console.log(`Дундаж: ${average}`);
// Дундаж 87.6

//Жишээ 2: Хамгийн их утга олох

let numbers = [23, 45, 12, 67, 89, 34];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(`Хамгийн их: ${max}`);
// Хамгийн их: 89

//Жишээ 3: Шинэ array үүсгэх

let numberss = [1, 2, 3, 4, 5];
let doubled = [];

for (let i = 0; i < numberss.length; i++) {
    doubled.push(numberss[i] * 2);
}

console.log(doubled);
// [2, 4, 6, 8, 10]











