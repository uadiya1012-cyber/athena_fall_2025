// exercise 1

let person = {
    name: 'Adiya',
    age: 28,
    city: 'UB',
    isStudent: true
}
console.log(person);


// exercise 2

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
};

console.log(car.brand);
console.log(car.year);
console.log(car.color);

// exercise 3
const book = {
    title: 'JavaScript Basics',
    author: 'John Doe',
    pages: 300,
    'publication year': 2021
};

console.log(book["title"]);
console.log(book["publication year"]);


// exercise 4

const student = {
    name: 'Сарнай',
    age: 20
};

student.major = 'Computer Science';
student.gpa = 3.8;

console.log(student);


// exercise 5
const product = {
    name: 'Laptop',
    price: 1000,
    inStock: true
};

product.price = 850;
product.inStock = true;

console.log(product);


// exercise 6
const user = {
    username: 'boldoo',
    email: 'bold@example.com',
    password: 'secret123',
    age: 28
};
delete user.password;

console.log(user);

// exercise 7
const phone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 799
};

console.log('Keys:', Object.keys(phone));
console.log('Values:', Object.values(phone));
console.log('Entries:', Object.entries(phone));


// exercise 8
const calculator = {
    num1: 10,
    num2: 5,
    add() {
        return this.num1 + this.num2;
    },
    subtract() {
        return this.num1 - this.num2;
    },
    multiply() {
        return this.num1 * this.num2;
    }
};

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());


// exercise 9
const person1 = {
    firstName: 'Болд',
    lastName: 'Батаа',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person1.getFullName());

// exercise 10
const company = {
    name: 'Tech Corp',
    address: {
        city: 'Улаанбаатар',
        district: 'Сүхбаатар',
        street: 'Пийс Авеню'
    },
    employees: 150
};

console.log(company.address.city);
console.log(company.address.district);

company.address.zipCode = '14200';

console.log(company);

// exercise 11
const students = [
    { name: 'Болд', grade: 85 },
    { name: 'Сарнай', grade: 92 },
    { name: 'Дорж', grade: 78 }
];

students.forEach(student => {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});

// exercise 12
const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8
};

const { title, director, rating } = movie;

console.log(`Title: ${title}`);
console.log(`Director: ${director}`);
console.log(`Rating: ${rating}`);


// exercise 13
const original = { name: 'Laptop', price: 1000 };

const copy = Object.assign({}, original);
copy.price = 850;

console.log('Original:', original);
console.log('Copy:', copy);

// exercise 14
const settings = {
    theme: 'dark',
    language: 'mn',
    notifications: true
};

if ('theme' in settings) {
    console.log('Theme is set');
}

if (!('autoSave' in settings)) {
    console.log('AutoSave is not set');
}

// exercise 15
const products = [
    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 500, category: 'Electronics' },
    { id: 3, name: 'Desk', price: 300, category: 'Furniture' },
    { id: 4, name: 'Chair', price: 150, category: 'Furniture' }
];

console.log(products.find(p => p.id === 2));
console.log(products.filter(p => p.category === 'Furniture'));
console.log(products.filter(p => p.price < 400));

// exercise 16
const students1 = [
    { name: 'Болд', score: 85 },
    { name: 'Сарнай', score: 92 },
    { name: 'Дорж', score: 78 }
];

console.log(students1.map(s => s.name));

console.log(students1.map(s => ({
    name: s.name,
    score: s.score + 5
})));

console.log(students1.map(s => ({
    ...s,
    grade: s.score >= 90 ? 'A' : s.score >= 80 ? 'B' : 'C'
})));

// exercise 17
const transactions = [
    { id: 1, type: 'income', amount: 1000 },
    { id: 2, type: 'expense', amount: 500 },
    { id: 3, type: 'income', amount: 1500 },
    { id: 4, type: 'expense', amount: 300 },
    { id: 5, type: 'income', amount: 800 }
];

const grouped = transactions.reduce((acc, t) => {
    acc[t.type] = acc[t.type] || [];
    acc[t.type].push(t);
    return acc;
}, {});

console.log(grouped);


// exercise 18
const original1 = {
    name: 'Company',
    address: { city: 'УБ', district: 'СХД' },
    employees: ['Болд', 'Сарнай']
};

const clone = JSON.parse(JSON.stringify(original1));

clone.address.city = 'Дархан';
clone.employees.push('Дорж');

console.log('Original:', original1);
console.log('Clone:', clone);

// exercise 19
const defaults = {
    theme: 'light',
    language: 'en',
    fontSize: 14,
    autoSave: true
};
const userSettings = {
    theme: 'dark',
    language: 'mn'

};
const sessionSettings = {
    fontSize: 16
};

const settings1 = { ...defaults, ...userSettings, ...sessionSettings };

console.log(settings1);

// exercise 20

const cart = {
    items: [
        { name: 'Laptop', price: 1000, quantity: 1 },
        { name: 'Mouse', price: 25, quantity: 2 },
        { name: 'Keyboard', price: 75, quantity: 1 }
    ],
    taxRate: 0.10,
    discountCode: 'SAVE20',

    getSubtotal() {
        return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    getTax() {
        return this.getSubtotal() * this.taxRate;
    },
    getDiscount() {
        return this.getSubtotal() * 0.20;
    },
    getTotal() {
        return this.getSubtotal() + this.getTax() - this.getDiscount();
    },
    getSummary() {
        return {
            subtotal: this.getSubtotal(),
            tax: this.getTax(),
            discount: this.getDiscount(),
            total: this.getTotal(),
            itemCount: this.items.reduce((sum, i) => sum + i.quantity, 0)
        };
    }
};

console.log(cart.getSummary());

