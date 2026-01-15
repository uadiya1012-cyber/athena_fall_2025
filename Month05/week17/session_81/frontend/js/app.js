// import { formatDate } from './utils.js';
// import { fetchUser } from './api.js';
// import { renderProfile } from './ui.js';


// app.js

// Хэрэгтэй зүйлсийг import
import { add, multiply, PI } from './math.js';

console.log(add(5, 3));      // 8
console.log(multiply(4, 2)); // 8
console.log(PI);             // 3.14159

// Нэрийг өөрчлөх
import { add as sum, multiply as mult } from './math.js';

console.log(sum(5, 3));  // 8
console.log(mult(4, 2)); // 8


// Default import - дурын нэр өгч болно
import Logger from './logger.js';
import MyLogger from './logger.js';  // Адилхан

const logger = new Logger();
logger.log('Hello!');


// Default + Named хамт import
// import api, { get, post } from './api.js';

// Эсвэл
import api from './api.js';
import { get, post } from './api.js';


// Бүгдийг нэг object руу import
import * as MathUtils from './math.js';

console.log(MathUtils.add(5, 3));
console.log(MathUtils.PI);
console.log(new MathUtils.Calculator());


// Module дотор автоматаар strict mode
// "use strict" бичих шаардлагагүй

// Top-level await ажиллана (ES2022)
// const data = await fetch('/api/data');

// this нь undefined
console.log(this); // undefined

// Module scope - global биш
const privateVar = 'secret'; // window.privateVar байхгүй


// app.js
import { capitalize, unique, chunk } from './utils/index.js';

console.log(capitalize('hello'));           // "Hello"
console.log(unique([1, 2, 2, 3]));          // [1, 2, 3]
console.log(chunk([1, 2, 3, 4, 5], 2));     // [[1,2], [3,4], [5]]


// app.js
import User, { createUser } from './models/user.js';

const user1 = new User('John', 'john@example.com');
const user2 = createUser('Jane', 'jane@example.com');

console.log(user1.getInfo());
console.log(user2.toJSON());




