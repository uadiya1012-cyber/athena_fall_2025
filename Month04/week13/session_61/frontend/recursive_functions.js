function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

function factorial2(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial2(5));


function sum(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sum(n - 1);
    }
}
console.log(sum(5));


function factorial_iterative(n) {
    function iter(product, counter) {
        if (counter > n) {
            return product;
        } else {
            return iter(product * counter, counter + 1);
        }
    }
    return iter(1, 1);
}
console.log(factorial_iterative(5))