
// TODO: Өөрийн map, filter, reduce бич
Array.prototype.myMap = function (callback) {
    // Код бич
};

Array.prototype.myFilter = function (callback) {
    // Код бич
};

Array.prototype.myReduce = function (callback, initialValue) {
    // Код бич
};

// Тест:let numbers = [1, 2, 3, 4, 5];
console.log(numbers.myMap(x => x * 2));
console.log(numbers.myFilter(x => x % 2 === 0));
console.log(numbers.myReduce((a, b) => a + b, 0));
