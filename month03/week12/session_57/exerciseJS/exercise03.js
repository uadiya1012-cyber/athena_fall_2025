// Дасгал 1

// let a = 7;
// let b = 3;
// console.log(a * b);

// Дасгал 2

let myName = 'Адъяа';
let myClass = 'Tornado';
const myTeacher = 'Хангайхүү';
const myLessonTopic = 'Javascript Variables';
let myScore = 100;

console.log(`Миний нэрийг ${myName} гэдэг.
Манай багшийг ${myTeacher} гэдэг.
Би ${myClass} ангид сурдаг ба "${myLessonTopic}" сэдвээр ${myScore}% амжилт үзүүлэв.`);


// Дасгал 3

let num = Number("15");
let result = num + 5;
console.log(result);


// Дасгал 4

const lightSpeed = 300000;
const distance = 150000000;

let travelTime = distance / lightSpeed;
let minutes = travelTime / 60;

console.log(minutes);


// Дасгал 5

// let a = 2;
// let b = 3;

// let P = 2 * (a + b);
// let S = a * b;

// console.log("Периметр =", P);
// console.log("Талбай =", S);


// Дасгал 6

let N = 3;
let Z = "Сарнай";
let Y = "Улаанбаатар";
let X = "программист";

console.log(`Та ${Y}-д ${X} байх болно, ${Z}-тэй гэрлэж ${N} хүүхэдтэй болно.`);


// Дасгал 7


let birthYear = 1988;
let futureYear = 2026;

let age = futureYear - birthYear;

console.log(`Би ${futureYear} онд ${age} настай байх болно.`);

// Дасгал 8

let currentAge = 20;
let finalAge = 90;
let perDay = 2;

let total = (finalAge - currentAge) * 365 * perDay;

console.log(`${finalAge} наслах хүртлээ танд энэ зүйл нийт ${total} хэрэгтэй болно.`);

// Дасгал 9

let R = 10;
let L = 2 * Math.PI * R;
let S = Math.PI * R * R;

console.log(`${R} см радиустай тойргийн урт нь ${L.toFixed(2)}`);
console.log(`Түүний талбай нь ${S.toFixed(2)}`);

// Дасгал 10

let c = 0;
let f = (c * 9 / 5) + 32;
console.log(`${c}°C нь ${f}°F`);

let f2 = 32;
let c2 = (f2 - 32) * 5 / 9;
console.log(`${f2}°F нь ${c2}°C`);
