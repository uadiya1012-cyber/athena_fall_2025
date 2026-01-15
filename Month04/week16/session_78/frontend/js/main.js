const successPromise = new Promise((resolve, reject) => {
    resolve('Success');
});
console.log(successPromise);

// const failPromise = new Promise((resolve, reject) => {
//     reject(new Error('Something went wrong'));
// });
// console.log(failPromise);


const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done after 2 seconds');
    }, 2000);
});
console.log(asyncPromise);

// const conditionalPromise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;

//     setTimeout(() => {
//         if (success) {
//             resolve({ data: 'Some data' });
//         } else {
//             reject(new Error('Failure'));
//         }
//     }, 1000);
// });
// console.log(conditionalPromise);


// callback based function

function getUserCallback(id, callback) {
    setTimeout(() => {
        if (id > 0) {
            callback(null, { id, name: 'John' });
        } else {
            callback(new Error('Invalid id'), null);
        }
    }, 1000);
}

function getMessageCallback(error, data) {
    if (error == null) {
        console.log(data);
    } else {
        console.log(error);
    }
}

// getUserCallback(0, getMessageCallback);



// promise base wrapper

function getUser(id) {
    return new Promise((resolve, reject) => {
        getUserCallback(id, (error, user) => {
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        });
    });
}

// getUser(0)
//     .then(user => console.log(user))
//     .catch(error => console.error(error));




const resolved = Promise.resolve('Immediate value');
resolved.then(value => console.log(value));

const rejected = Promise.reject(new Error('Immediate error'));
rejected.catch(error => console.log(error));

const myPromise = new Promise((resolve, reject) => {
    let success = true;  // false үед ч done болно.

    setTimeout(() => {
        if (success) {
            resolve('Success');
        } else {
            reject('Error');
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => {
        console.log('Done');
    });



Promise.resolve(1)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => x + 10)
    .then(x => console.log(x));


Promise.resolve('Start')
    .then(value => {
        console.log(value);
        throw new Error('Error at Step 1');
    })
    .then(value => {
        console.log('This never runs')
    })
    .then(value => {
        console.log('This alos never runs');
    })
    .catch(error => {
        console.log('Caugth', error.message);
        return 'Recovered';
    })
    .then(value => {
        console.log('Continues', value);
    });

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error('Failed promise 2'));
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.log('One failed:', error);
    });


const slow = new Promise((resolve => setTimeout(() => resolve('Slow'), 2000)));
const fast = new Promise((resolve => setTimeout(() => resolve('Fast'), 500)));

Promise.race([slow, fast])
    .then(value => console.log('Winner:', value));


const promises = [
    Promise.resolve('Success 1'),
    Promise.reject(new Error('Failed')),
    Promise.resolve('Success 2'),
];

Promise.allSettled(promises)
    .then(result => {
        console.log(result);

        const successes = result.filter(r => r.status === 'fulfilled').map(r => r.value);
        console.log('Successes:', successes);
    });

const promises2 = [
    Promise.reject(new Error('Error 1')),
    new Promise(resolve => setTimeout(() => resolve('--- Success ---'), 1000)),
    Promise.reject(new Error('Error 2')),
];

Promise.any(promises2)
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log('All failed');
    });