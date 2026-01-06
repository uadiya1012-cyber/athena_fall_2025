
// Sync
console.log('1. Start');
console.log('2. Processing');
console.log('3. End');

function syncOperation() {
    console.log('Start...');

    const start = Date.now();
    while (Date.now() - start < 3000) {
        //blocking
    }

    console.log('End.');
}
// syncOperation();


// Async

console.log('1. Start');

// setTimeout(() => {
//     console.log('Async ending');
// }, 2000);

console.log('Processing');


// fetch function
console.log('Start fetch');

async function fetchProduct() {
    const response = await fetch('https://dummyjson.com/products').then(res => res.json()).catch(err => err);

    console.log(response);
}

// fetchProduct();

console.log('Other process');


// Call back

function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    const result = square(n);
    console.log(result);
}

printSquare(4);


// callback queue
// setTimeout(() => {
//     console.log('A');
// }, 0);
// setTimeout(() => {
//     console.log('B');
// }, 0);
// setTimeout(() => {
//     console.log('C');
// }, 0);




// Event loop
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);

console.log('A');
setTimeout(() => {
    console.log('B');
}, 0);

for (let i = 0; i < 10000; i++) { }

console.log('C');








