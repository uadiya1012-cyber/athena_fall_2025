// example 1

// for (let i = 1; i <= 5; i = i + 1) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Практик жишээнүүд


// 1
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log("Нийлбэр:", sum);

// 2
// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log("5! =", factorial);

// 3 Буурах дараалалаар
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// 4 хоёроор нэмэгдэх тэгш тоонууд
// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i);
// }

// Nested for Loop (Давхар давталт)
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row = row + (i * j) + "\t";
//     }
//     console.log(row);
// }



// While loop

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i = i + 1;
// 

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// 

// let sum = 0;
// let i = 1;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }
// console.log("Нийлбэр:", sum);

// let num = 64;
// while (num % 2 === 0) {
//     console.log(num);
//     num = num / 2;
// 

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// 

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// АНХААРУУЛГА: Энэ кодыг ажиллуулбал зогсохгүй!
// while (true) {
//     console.log("Forever!");
// }
// Зөв: Заавал зогсоох нөхцөл байх ёстой
// let count = 0;
// while (true) {
//     console.log(count);
//     count++;
//     if (count >= 5) {
//         break;  // Зогсоох нөхцөл
//     }
// }
