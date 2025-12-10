// Conditional Expressions
// ternary operator
// condition ? if true: false

function absEXP(x) {
    return x >= 0 ? x : -x;
}

console.log(absEXP(-5));
console.log(absEXP(5));


const a = 10;
const b = 11;
const max = (a > b) ? a : b;
console.log(max);

// exercise ternary operator ашиглан evenOrOdd гэдэг функц бичээд
// өгөгдсөн тоон параметр нь тэгш сондгой гэдэг үгнүүдийг буцаадаг болгоно уу

function evenOrOdd(c) {
    return c % 2 == 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(5));
console.log(evenOrOdd(8));

// nested conditional expression
function grade(score) {
    return score >= 90 ? "A" :
        score >= 80 ? "B" :
            score >= 70 ? "C" :
                score >= 60 ? "D" : "F";
}

console.log(grade(95));
console.log(grade(82));
console.log(grade(73));
console.log(grade(65));
console.log(grade(45));


// 3-н тооны хамгийн ихийг олно уу
// Imperative
function maxImperative(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

// Declarative

function maxTwo(a, b) {
    return a > b ? a : b;
}
function maxDeclarative(a, b, c) {
    return maxTwo(maxTwo(a, b), c);
}

console.log(maxImperative(8, 7, 10));
console.log(maxDeclarative(8, 7, 10));