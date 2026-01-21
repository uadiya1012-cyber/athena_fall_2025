function sumArray(numbers) {
    return numbers.reduce(function (sum, n) { return sum + n; }, 0);
}
function filterPositive(numbers) {
    return numbers.filter(function (n) { return n > 0; });
}
function findMax(numbers) {
    return Math.max.apply(Math, numbers);
}
