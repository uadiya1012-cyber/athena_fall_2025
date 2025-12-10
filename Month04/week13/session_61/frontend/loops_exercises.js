// Дасгал 1: 1-ээс 20 хүртэлх тэгш тоонуудыг хэвлэх

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// Дасгал 2: 10-аас 1 хүртэл буурах дарааллаар хэвлэх

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Дасгал 3: 1-ээс n хүртэлх тоонуудын үржвэр (factorial) - Loop ашиглах

// function factorialLoop(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorialLoop(5));
// console.log(factorialLoop(7));

// Дасгал 4: Тоонуудын нийлбэр (1-ээс n) - while loop ашиглах

// function sumWhile(n) {
//     let sum = 0;
//     let i = 1;

//     while (i <= n) {
//         sum = sum + i;
//         i++;
//     }

//     return sum;
// }

// console.log(sumWhile(10));
// console.log(sumWhile(100));

// Дасгал 5: Үржүүлгийн хүснэгт (1-10) - Nested loop

// for (let i = 1; i <= 10; i++) {
//     let row = "";

//     for (let j = 1; j <= 10; j++) {
//         row += (i * j) + "\t";
//     }

//     console.log(row);
// }

// Дасгал 6: Countdown - Рекурсив

// function countdown(n) {
//     if (n === 0) {
//         return;
//     }

//     console.log(n);
//     countdown(n - 1);
// }

// countdown(5);

// Дасгал 7: Sum of digits - Тоон дахь цифрүүдийн нийлбэр

// function sumOfDigits(n) {
//     if (n === 0) {
//         return 0;
//     }

//     let lastDigit = n % 10;
//     let remaining = Math.floor(n / 10);

//     return lastDigit + sumOfDigits(remaining);
// }

// console.log(sumOfDigits(123));
// console.log(sumOfDigits(9999));


// Дасгал 8: Multiply - Үржвэр (Recursion)

// function multiply(a, b) {
//     if (b === 0) {
//         return 0;
//     }

//     return a + multiply(a, b - 1);
// }

// console.log(multiply(3, 4));
// console.log(multiply(5, 6));

// Дасгал 9: Count down to zero - Substitution model бичих

// function countToZero(n) {
//     if (n === 0) {
//         return "Done!";
//     } else {
//         console.log(n);
//         return countToZero(n - 1);
//     }
// }
// console.log(countToZero(3));


// Дасгал 10: Loop vs Recursion харьцуулалт

// Дараах функцийг LOOP болон RECURSION хоёуланг нь бичнэ үү:
// isEven(n) - тоо тэгш эсэхийг шалгах (зөвхөн -2 ашиглах)
// isEven(4) -> isEven(2) -> isEven(0) -> true
// isEven(5) -> isEven(3) -> isEven(1) -> false

// loop хувилбар
// function isEvenLoop(n) {
//     n = Math.abs(n);

//     while (n > 0) {
//         n -= 2;
//     }

//     return n === 0;
// }

// console.log(isEvenLoop(4));
// console.log(isEvenLoop(5));

// recursion хувилбар
// function isEvenRecursive(n) {
//     n = Math.abs(n);

//     if (n === 0) return true;
//     if (n === 1) return false;

//     return isEvenRecursive(n - 2);
// }

// console.log(isEvenRecursive(4));
// console.log(isEvenRecursive(5));


// Recursive:
// function sum_cubes_rec(n) {
//     if (n === 0) return 0;
//     return n * n * n + sum_cubes_rec(n - 1);
// }
// console.log(sum_cubes_rec(3))

// a) sum_cubes - recursive → loop
// function sum_cubes_loop(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i * i * i;
//     }
//     return sum;
// }
// console.log(sum_cubes_loop(3));

// b) expt - recursive → loop
// function expt_loop(b, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= b;
//     }
//     return result;
// }
// console.log(expt_loop(2, 3));
// console.log(expt_loop(5, 4));

// c) gcd - recursive → loop (Euclidean algorithm)
// function gcd_loop(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// console.log(gcd_loop(48, 18));
// console.log(gcd_loop(54, 24));


// a) isPrime(n) - n анхны тоо эсэх
// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(2));
// console.log(isPrime(17));
// console.log(isPrime(18));

// b) FizzBuzz 1-ээс n хүртэл
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }
}
console.log(fizzBuzz(15));













