// Exercises session 63

// python list [1, 2, 3]
let numbers = [5, 10, 15, 20, 25, 30];
console.log(numbers[0]);
console.log(`Array Length is: ${numbers.length}`);
console.log(`Before adding element : ${numbers}`);

numbers.push(35);
console.log(`After adding element: ${numbers}`);

for (let i = 0; i < numbers.length; i++) {
    console.log(`Array Element at index ${i} is ${numbers[i]}`);
}

numbers[0] = 6;
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i] * 2;
    numbers[i] = n;
}

console.log(numbers);