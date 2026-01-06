// Exercise 03

let scores = [85, 92, 78, 95, 88, 73, 90];


// for loop ashiglaw
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
}
console.log(total)

// array reduce function ashiglah
const result = scores.reduce(function (total, score) {
    return total + score;
}, 0);
console.log(`Total score is: ${result}`);

console.log(`Average score is : ${result / scores.length}`);

const max = scores.reduce((maximum, score) => {
    return score > maximum ? score : maximum;
}, scores[0]);
console.log(max);

const min = scores.reduce((minimum, score) => {
    return score < minimum ? score : minimum;
}, scores[0]);
console.log(min);