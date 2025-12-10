// javascript functions


// keyword
//function declaration
function square(x) {
    return x * x;
}

// function call

const result = square(5);
console.log(result);
console.log(square(21));

console.log(square(2 + 5));

const result2 = square(square(3));

function sum_of_squares(x, y) {
    return square(x) + square(y);
}

console.log(sum_of_squares(5, 6));

function f(a) {
    return sum_of_squares(a + 1, a * 2);
}
console.log(f(5));


