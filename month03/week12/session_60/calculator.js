// ============================================
// 1. ҮНДСЭН ФУНКЦҮҮД (Өгөгдсөн)
// ============================================

function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

function half(x) {
    return x / 2;
}

function addOne(x) {
    return x + 1;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

// Тест
console.log("=== 1. ҮНДСЭН ФУНКЦҮҮД ===");
console.log("square(5) =", square(5));
console.log("double(7) =", double(7));
console.log("add(3, 4) =", add(3, 4));
console.log("multiply(6, 7) =", multiply(6, 7));


// ============================================
// 2. COMPOUND FUNCTIONS
// ============================================

// 2.1 Тооны куб (x³)
function cube(x) {
    return multiply(x, square(x));
}

// 2.2 Квадратуудын нийлбэр (a² + b²)
function sumOfSquares(a, b) {
    return add(square(a), square(b));
}

// 2.3 Квадратуудын зөрүү (a² - b²)
function differenceOfSquares(a, b) {
    return subtract(square(a), square(b));
}

// 2.4 Дөрөвний зэрэг (x⁴)
function fourthPower(x) {
    return square(square(x));
}

// 2.5 Эхлээд double → square
function doubleThenSquare(x) {
    return square(double(x));
}

// 2.6 Эхлээд square → double
function squareThenDouble(x) {
    return double(square(x));
}

// 2.7 Гурван тооны нийлбэр
function sum3(a, b, c) {
    return add(add(a, b), c);
}

// 2.8 Гурван тооны дундаж
function average3(a, b, c) {
    return sum3(a, b, c) / 3;
}

// Тест
console.log("\n=== 2. COMPOUND FUNCTIONS ===");
console.log("cube(3) =", cube(3));
console.log("sumOfSquares(3, 4) =", sumOfSquares(3, 4));
console.log("differenceOfSquares(5, 3) =", differenceOfSquares(5, 3));
console.log("fourthPower(2) =", fourthPower(2));
console.log("doubleThenSquare(3) =", doubleThenSquare(3));
console.log("squareThenDouble(3) =", squareThenDouble(3));
console.log("sum3(10, 20, 30) =", sum3(10, 20, 30));
console.log("average3(10, 20, 30) =", average3(10, 20, 30));


// ============================================
// 3. CONDITIONAL EXPRESSIONS
// ============================================

// 3.1 Абсолют утга
function abs(x) {
    return x >= 0 ? x : -x;
}

// 3.2 Хоёр тооноос их нь
function max(a, b) {
    return a > b ? a : b;
}

// 3.3 Хоёр тооноос бага нь
function min(a, b) {
    return a < b ? a : b;
}

// 3.4 Гурван тооноос их нь
function max3(a, b, c) {
    return max(max(a, b), c);
}

// 3.5 Гурван тооноос бага нь
function min3(a, b, c) {
    return min(min(a, b), c);
}

// 3.6 Тэгш/Сондгой
function evenOrOdd(n) {
    return n % 2 === 0 ? "Тэгш" : "Сондгой";
}

// 3.7 Эерэг/Сөрөг/Тэг
function checkSign(n) {
    return n > 0 ? "Эерэг" : (n < 0 ? "Сөрөг" : "Тэг");
}

// 3.8 Тэнцсэн эсэх
function passOrFail(score) {
    return score >= 60 ? "Тэнцсэн" : "Тэнцээгүй";
}

// 3.9 Үсэгчилсэн үнэлгээ
function grade(score) {
    return score >= 90 ? "A" :
        score >= 80 ? "B" :
            score >= 70 ? "C" :
                score >= 60 ? "D" : "F";
}

// Тест
console.log("\n=== 3. CONDITIONAL EXPRESSIONS ===");
console.log("abs(-5) =", abs(-5));
console.log("max(10, 7) =", max(10, 7));
console.log("min(10, 7) =", min(10, 7));
console.log("max3(5, 12, 8) =", max3(5, 12, 8));
console.log("min3(5, 12, 8) =", min3(5, 12, 8));
console.log("evenOrOdd(7) =", evenOrOdd(7));
console.log("checkSign(0) =", checkSign(0));
console.log("grade(82) =", grade(82));


// ============================================
// 4. ЦАЛИН ТООЦООЛОХ
// ============================================

// 4.1 Үндсэн цалин
function calculateBaseSalary(hours, hourlyRate) {
    return multiply(hours, hourlyRate);
}

// 4.2 Урамшуулал
function calculateBonus(baseSalary, bonusPercent) {
    return baseSalary * (bonusPercent / 100);
}

// 4.3 Татвар
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

// 4.4 Нийт цалин
function calculateGrossSalary(hours, hourlyRate, bonusPercent) {
    const base = calculateBaseSalary(hours, hourlyRate);
    const bonus = calculateBonus(base, bonusPercent);
    return add(base, bonus);
}

// 4.5 Цэвэр цалин
function calculateNetSalary(hours, hourlyRate, bonusPercent, taxRate) {
    const gross = calculateGrossSalary(hours, hourlyRate, bonusPercent);
    const tax = calculateTax(gross, taxRate);
    return subtract(gross, tax);
}

// Тест
console.log("\n=== 4. ЦАЛИН ТООЦООЛОХ ===");
console.log("Үндсэн цалин:", calculateBaseSalary(160, 10000));
console.log("Нийт цалин:", calculateGrossSalary(160, 10000, 10));
console.log("Цэвэр цалин:", calculateNetSalary(160, 10000, 10, 15));


// ============================================
// 5. НЭМЭЛТ СОРИЛТ
// ============================================

// 5.1 (a + b)³
function cubeOfSum(a, b) {
    return cube(add(a, b));
}

// 5.2 Абсолют зөрүү
function absoluteDifference(a, b) {
    return abs(subtract(a, b));
}

// 5.3 clamp
function clamp(value, minVal, maxVal) {
    return max(min(value, maxVal), minVal);
}

// Тест
console.log("\n=== 5. НЭМЭЛТ СОРИЛТ ===");
console.log("cubeOfSum(2, 3) =", cubeOfSum(2, 3));
console.log("absoluteDifference(10, 3) =", absoluteDifference(10, 3));
console.log("clamp(15, 0, 10) =", clamp(15, 0, 10));
console.log("clamp(-5, 0, 10) =", clamp(-5, 0, 10));
console.log("clamp(5, 0, 10) =", clamp(5, 0, 10));


// ============================================
// 6. SUBSTITUTION MODEL
// ============================================

// 6.1 sumOfSquares(3, 4)
// sumOfSquares(3, 4)
// → add(square(3), square(4))
// → add(9, 16)
// → 25

// 6.2 doubleThenSquare(3)
// doubleThenSquare(3)
// → square(double(3))
// → square(6)
// → 36

// 6.3 max3(5, 12, 8)
// max3(5, 12, 8)
// → max(max(5, 12), 8)
// → max(12, 8)
// → 12

console.log("\n=== ДУУСЛАА ===");
