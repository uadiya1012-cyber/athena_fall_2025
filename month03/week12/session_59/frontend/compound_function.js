// compound function

// simple function
function square(x) {
    return x * x;
}

// simple function
function double(x) {
    return 2 * x;
}

// compound function
function squareThenDouble(x) {
    return double(square(x));
}

// Test

console.log(square(3));
console.log(double(3));
console.log(squareThenDouble(3));

// calculate salary

function calculateBaseSalary(hoursWorked, hourlyRate) {
    return hoursWorked * hourlyRate;
}

function calculateBonus(baseSalary, bonusPrecent) {
    return (baseSalary * bonusPrecent) / 100;
}

function calculateTax(amount, taxRate) {
    return (amount * taxRate) / 100;
}

// compound calculate net salary

function calculateNetSalary(hoursWorked, hourlyRate, bonusPrecent, taxRate) {
    const baseSalary = calculateBaseSalary(hoursWorked, hourlyRate);
    const bonus = calculateBonus(baseSalary, bonusPrecent);
    const grossSalary = baseSalary + bonus;
    const tax = calculateTax(grossSalary, taxRate);
    return grossSalary - tax;
}

// Test
const netSalary = calculateNetSalary(160, 10000, 10, 15);
console.log(netSalary);

//  Example 03

function f(a) {
    return a + 1;
}

function g(b) {
    return b + 2;
}

function h(x) {
    return f(g(x)) + g(f(x));
}
console.log(h(3));

//  const гэж юу вэ?
const myName = "Khangaikhuu";   // 1 rule заавал утга эхлээд оноох ёстой.

//  myName = "Uvgunkhuu";

var firstName = 'Khangai';
firstName = 'uvgun';
console.log(firstName);

let LastName = 'Adam';  // ES6 - ecmascript 2005 - closure
LastName = 'Eva';
console.log(LastName);

// let lastName = 'Eva';

var firstName = 'Eva';
console.log(firstName);
