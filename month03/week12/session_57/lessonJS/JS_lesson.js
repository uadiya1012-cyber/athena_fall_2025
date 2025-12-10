// Дасгал 1
// (function () {
//     let number = 15;
//     const text = "Hello JS";
//     var isActive = true;

//     console.log('Дасгал 1:', number, text, isActive);
// })();


// Дасгал 2
// (function () {
//     let x, y, z;
//     x = y = z = 10;

//     console.log('Дасгал 2:', x, y, z);
// })();


// Дасгал 3
// (function() {
//     let a = 5;
//     let b = 10;

//     [a, b] = [b, a];

//     console.log('Дасгал 3:', 'a =', a, 'b =', b);
// })();


// Дасгал 4
// (function () {
//     let score = 10;

//     score += 5; // 15
//     score *= 2; // 30
//     score /= 3; // 10
//     score -= 4; // 6

//     console.log('Дасгал 4:', score);
// })();


// Дасгал 5
// (function () {
//     let x = 10;
//     let y = 5;

//     console.log(x + y);     // 15
//     console.log(x * y);     // 50
//     console.log(x / y);     // 2
//     console.log(x ** 2);    // 100
//     console.log(y ** 5);    // 3125
//     console.log(y + x);     // 15
//     console.log(y * x);     // 50
//     console.log(y / x);     // 0.5
//     console.log(x % y);     // 0
//     console.log(y % x);     // 5
// })();


// Дасгал 6
// (function() {
//     let x = 10.5;
//     let y = 5.5;

//     x++;    // 11.5
//     x--;    // 10.5
//     y++;    // 6.5
//     y--;    // 5.5

//     console.log('Дасгал 6:', x, y);
// })();


// Дасгал 7
// (function () {
//     let x = 10;
//     let y = '10';

//     console.log('Дасгал 7:', typeof x, typeof y);
// })();


// Дасгал 8
// (function () {
//     let x = 10;
//     let y = '10';

//     console.log("Дасгал 8:", x + Number(y));
// })();


// Дасгал 9
// (function () {
//     let age = prompt("Насаа оруулна уу:");
//     console.log(typeof age);

//     let future = Number(age) + 20;

//     alert(`20 жилийн дараа би ${future} настай байна!`);
// })();


// Дасгал 10
// (function () {
//     let x = 10;
//     let y = 20;

//     console.log(String(x) + String(y));
//     console.log(String(y) + String(x));
// })();

// Дасгал 11
// (function () {
//     let x = '10.8';
//     let y = '20.5';

//     console.log(Number(x) + Number(y));
//     console.log(Number(x) * Number(y));
//     console.log(Number(x) / Number(y));
//     console.log(Number(x) % Number(y));

//     console.log(x + y);
//     console.log(y + x);
// })();


// Дасгал 12
// (function () {
//     let a = 10;
//     let b = '20';
//     let c = 'Hello';
//     let d = '20.5';

//     console.log(Number(a) + Number(b));
//     console.log(Number(b) * Number(d));

//     console.log(Number(c));
//     console.log(isNaN(c));
// })();

// Дасгал 13
// (function () {
//     let x = 10;
//     let y = 20;
//     console.log(String(x) + String(y));
//     console.log(String(y) + String(x));

//     console.log((x / 2).toString() + (y / 2).toString());
// })();

// Дасгал 14
// (function () {
//     let a = 10;
//     let b = 20;
//     let c = 5.6;
//     let d = true;
//     let e = 'Hello';

//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);
//     console.log(typeof d);
//     console.log(typeof e);
// })();


// Дасгал 15
// (function () {
//     let firstName = 'John';
//     let lastName = 'Doe';

//     console.log(firstName + ' ' + lastName);
// })();

// Дасгал 16
// (function () {
//     let name = 'Adiyakhuu';
//     let age = 28;
//     let job = 'Developer';
//     let birthYear = 2025 - age;

//     console.log(`Намайг ${name} гэдэг. Би ${age} настай. ${birthYear} онд төрсөн. Миний мэргэжил бол ${job}.`);
// })();

// Дасгал 17
// (function () {
//     let firstName = "John";
//     console.log("Hello ", firstName);
// })();

// Дасгал 18
// (function () {
//     let firstName = 'John';
//     let lastName = 'Doe';
//     console.log("Hello ", firstName, lastName);
// })();

// Дасгал 19
// (function () {
//     let x = 10;
//     let y = 20;

//     console.log(x == y);
//     console.log(x != y);
//     console.log(x > y);
//     console.log(x < y);
//     console.log(x >= y);
//     console.log(x <= y);
// })();

// Дасгал 20
// (function () {
//     let x = 10;
//     let y = '10';

//     console.log(x == y);
//     console.log(x === y);
//     console.log(x != y);
//     console.log(x !== y);
// })();

// Дасгал 21
// (function () {
//     let myName = prompt("Нэрээ оруулна уу:");
//     console.log("Дасгал 21:", myName == "Hello");
// })();

// Дасгал 22
// const exercise22 = () => {
//     let numValue = 42;
//     let strValue = "42";

//     let comparison1 = numValue == strValue;
//     let comparison2 = numValue === strValue;

//     console.log("Дасгал 22:", {
//         "сул тэнцэтгэл": comparison1,
//         "хатуу тэнцэтгэл": comparison2
//     });
// }

// Дасгал 23
// const exercise23 = () => {
//     let age = 25;
//     let minimumAge = 18;
//     let maximumAge = 65;

//     let isOldEnough = age > minimumAge;
//     let isUnerLimit = age < maximumAge;
//     let isInRange = age >= minimumAge && age <= maximumAge;

//     console.log("Дасгал 23:", {
//         "хангалттай нас": isOldEnough,
//         "дээд хязгаараас бага": isUnerLimit,
//         "зөвшөөрөгдөх хязгаарт": isInRange
//     });
// }

// Дасгал 24
// const exercise24 = () => {
//     let value1 = null;
//     let value2 = undefined;
//     let value3 = 0;
//     let value4 = "";

//     let nullUndefined = value1 == value2;
//     let zeroEmpty = value3 === value4;
//     let nullNotZero = value1 != value3;

//     console.log("Дасгал 24:", {
//         "null == undefined": nullUndefined,
//         "0 === ''": zeroEmpty,
//         "null != 0": nullNotZero
//     });
// }


// Дасгал 25
// const exercise25 = () => {
//     let name1 = "Болд";
//     let name2 = "Баатар";
//     let name3 = "болд";

//     let alphabeticalOrder = name1 > name2;
//     let sameNameDifferentCase = name1.toLowerCase() === name3.toLowerCase();

//     console.log("Дасгал 25:", {
//         "цагаан толгойн дараалал": alphabeticalOrder,
//         "том жижиг үсэг хамаагүй": sameNameDifferentCase
//     });
// }


// Дасгал 26
// const exercise26 = () => {
//     let hasUsername = true;
//     let hasPassword = true;
//     let isAdmin = false;
//     let isLoggedIn = true;

//     let canLogin = hasUsername && hasPassword;
//     let canAccessAdmin = isLoggedIn && isAdmin;
//     let canAccessBasic = isLoggedIn || isAdmin;

//     console.log("Дасгал 26:", {
//         "нэвтрэх боломжтой": canLogin,
//         "админ хандалт": canAccessAdmin,
//         "энгийн хандалт": canAccessBasic
//     });
// }


// Дасгал 27
// const exercise27 = () => {
//     let score = 85;

//     let isB = score >= 80 && score <= 90;
//     let isFailOrA = score < 60 || score > 90;

//     console.log("Дасгал 27:", {
//         "B үнэлгээ мөн": isB,
//         "F эсвэл A үнэлгээ": isFailOrA
//     });
// }


// Дасгал 28
// const exercise28 = () => {
//     let value1 = "";
//     let value2 = 0;
//     let value3 = "0";
//     let value4 = false;

//     let isFalsy1 = !value1;
//     let looseComparison = value2 == value4;
//     let areNotEqual = value2 != value3;

//     console.log("Дасгал 28:", {
//         "хоосон тэмдэгт мөр худал": isFalsy1,
//         "0 == false": looseComparison,
//         "0 != '0'": areNotEqual
//     });
// }


// Дасгал 29

// const exercise29 = () => {
//     let value1 = "5";
//     let value2 = 5;
//     let value3 = true;
//     let value4 = "true";

//     let looseEqual = value1 == value2;
//     let booleanString = value3 == value4;
//     let numberBoolean = value2 != value3;

//     console.log("Дасгал 29:", {
//         "тэмдэгт == тоо": looseEqual,
//         "boolean == тэмдэгт": booleanString,
//         "тоо != boolean": numberBoolean
//     });
// }

// Дасгал 30

// (function () {
//     let num1 = "123.45";
//     let num2 = "67";

//     let sum = parseFloat(num1) + parseInt(num2);
//     console.log("Дасгал 30:", sum); // 190.45
// })();

// Дасгал 31
// (function () {
//     let width = 150;
//     let widthPx = width + "px";
//     console.log("Дасгал 31:", widthPx);
// })();

// Дасгал 32
// let result1 = 100 / "apple";
// let result2 = parseInt("123.45");
// let result3 = parseInt("Hello");
// console.log("Дасгал 32:", result1, result2, result3);

// Дасгал 33
// let value1 = "5.5";
// let value2 = 10;
// let value3 = "2";
// let sumMixed = parseFloat(value1) + value2 + parseInt(value3);
// console.log("Дасгал 33:", sumMixed);

// Дасгал 34
// let x = 5;
// let y = x++;
// let z = ++x;
// console.log("Дасгал 34:", "x =", x, "y =", y, "z =", z);

// Дасгал 35
// let rem1 = 17 % 5;
// let pow2_4 = 2 ** 4;
// let rem2 = 23 % 7;
// console.log("Дасгал 35:", rem1, pow2_4, rem2);

// Дасгал 36
// let value = 5;
// value += 5;
// value *= 2;
// value -= 8;
// value /= 3;
// console.log("Дасгал 36:", value);

// Дасгал 37
// let greeting = "Сайн байна";
// let name = "Болд";
// let age = 25;
// let message = `${greeting} ${name}, та ${age} настай!`;
// console.log("Дасгал 37:", message);

// Дасгал 38
// let num = 5;
// let str = "5";
// console.log("Дасгал 38:", "==:", num == str, "===:", num === str);

// Дасгал 39
// let score = 75;
// let isAbove70 = score >= 70;
// let isBelow80 = score < 80;
// let isBetween60_90 = score >= score <= 90;
// console.log("Дасгал 39:", { isAbove70, isBelow80, isBetween60_90 });

// Дасгал 40
// let ageUser = 25;
// let hasLicense = true;
// let hasInsurance = false;
// let canDrive = ageUser >= 18 && hasLicense && hasInsurance;
// console.log("Дасгал 40:", canDrive);


// Дасгал 41: Текст шалгах
// let password = "НууцҮг123";
// let isExact = password === "НууцҮг123";
// let isLongEnough = password.length >= 8;
// let containsWord = password.includes("Үг");
// console.log("Дасгал 41:", { isExact, isLongEnough, containsWord });

// Дасгал 42: AND үйлдэл
// let isOnline = true;
// let isMember = true;
// let hasPaid = false;
// let canAccessContent = isOnline && isMember && hasPaid;
// console.log("Дасгал 42:", canAccessContent); // false

// Дасгал 43: OR үйлдэл
// let isAdmin = false;
// let isModerator = true;
// let isOwner = false;
// let hasSpecialAccess = isAdmin || isModerator || isOwner;
// console.log("Дасгал 43:", hasSpecialAccess); // true

// Дасгал 44: NOT үйлдэл
// let isBanned = false;
// let isLoggedIn = true;
// let isVerified = false;
// let canPost = isLoggedIn && !isBanned && isVerified;
// console.log("Дасгал 44:", canPost); // false

// Дасгал 45: Нийлмэл логик
// let hasCoupon = true;
// let cartTotal = 150000;
// let isFirstPurchase = false;
// let discountApplicable = (hasCoupon || isFirstPurchase) && cartTotal > 100000;
// console.log("Дасгал 45:", discountApplicable); // true

// Дасгал 46: Энгийн гурвалсан оператор
// let temperature = 28;
// let tempMessage = temperature > 25 ? "Халуун" : "Хэвийн";
// console.log("Дасгал 46:", tempMessage); // Халуун

// Дасгал 47: Давхар гурвалсан оператор
// let score = 85;
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
// console.log("Дасгал 47:", grade); // B

// Дасгал 48: Битийн үйлдлүүд
// let num1 = 5; // 101
// let num2 = 3; // 011
// console.log("Дасгал 48:", {
//     AND: num1 & num2,  // 101 & 011 = 001 = 1
//     OR: num1 | num2,   // 101 | 011 = 111 = 7
//     XOR: num1 ^ num2   // 101 ^ 011 = 110 = 6
// });

// Дасгал 49: Бит шилжүүлэх
// let num = 8; // 1000
// console.log("Дасгал 49:", {
//     leftShift: num << 1,   // 10000 = 16
//     rightShift: num >> 1   // 0100 = 4
// });

// Дасгал 50: Операторын ач холбогдол
// let a = 5, b = 10, c = 2, d = 3;
// let result1 = a + b * c;                 // 5 + (10*2) = 25
// let result2 = (a + b) * c;               // (5+10)*2 = 30
// let result3 = a + b * c / d;             // 5 + (10*2)/3 ≈ 11.6667
// let result4 = a > b || b / c >= d && d * a < b; // false || 5 >=3 && 15<10 → false
// let result5 = a > b ? c * d : b / c + d; // 5>10? ... : 10/2+3 = 8
// console.log("Дасгал 50:", { result1, result2, result3, result4, result5 });


