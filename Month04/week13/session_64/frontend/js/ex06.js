// exercises 06
console.log('Exercise 06');
console.log('+++++++++++++++++++++++++++++++++++++++++++++');

let text = "JavaScript is great JavaScript is fun JavaScript is powerful";

// TODO:
// 1. Үгүүдэд хуваах (.split(' '))
const wordsArray =
    text.split(' ')
        .reduce(function (counter, word) {
            // 2. Үг бүрийн давтамжийг тоолох (reduce)
            counter[word] = counter[word] + 1 || 1;
            return counter;
        }, {});
console.log(wordsArray)




// Хүлээгдэж буй үр дүн:
// {JavaScript: 3, is: 3, great: 1, fun: 1, powerful: 1}