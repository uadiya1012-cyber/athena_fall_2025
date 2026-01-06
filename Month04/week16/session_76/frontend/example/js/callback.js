function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayBye() {
    console.log('Goodbye!');
}

greet('Adiyakhuu', sayBye);

// async callback
// setTimeOut callback
// setTimeout(() => {
//     console.log('After 2 seconds')
// }, 2000);

// eventListener callback
let btn = document.getElementById('click');
btn.addEventListener('click', function () {
    console.log('clicked!');
});

// array method callback
const numbers = [1, 2, 3];
numbers.forEach(function (num) {
    console.log(num);
});




function boilWater() {
    return new Promise((resolve, reject) => {
        console.log('Ус буцалгаж эхэллээ.');

        setTimeout(() => {
            const kettleWorks = true;

            if (kettleWorks) {
                console.log('Ус буцаллаа.');
                resolve('Буцалсан ус.');
            } else {
                reject('Ус буцалгагч эвдэрсэн.')
            }
        }, 2000);
    });
}


function makeTea(water) {
    return new Promise((resolve, reject) => {
        console.log('Цай хийгдэж байна.');

        setTimeout(() => {
            resolve('Цай бэлэн боллоо.');
        }, 1000);
    });
}


// boilWater()
//     .then(water => makeTea(water))
//     .then(result => console.log(result))
//     .catch(error => console.error(error));


function checkBalance(amount) {
    return new Promise((resolve, reject) => {
        console.log('Данс шалгаж байна.');

        setTimeout(() => {
            const currentBalance = 500;

            if (amount < currentBalance) {
                resolve('Шалгалт амжилттай. Шилжүүлж эхэллээ.');
            } else {
                reject('Үлдэгдэл хүрэлцэхгүй байна.');
            }
        }, 1500);
    });
}


function transferMoney(amount) {
    return new Promise((resolve, reject) => {
        console.log(`${amount}₮ шилжүүлж байна.`);

        setTimeout(() => {
            resolve('Гүйлгээ амжилттай.');
        }, 2000);
    });
}

let amount = 300;

checkBalance(amount)
    .then(msg => {
        console.log(msg);
        return transferMoney(amount)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error));

