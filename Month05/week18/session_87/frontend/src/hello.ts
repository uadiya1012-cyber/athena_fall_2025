// Variables

let firstName: string = "Alice";
let age: number = 25;
let isStudent: boolean = false;

// arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Functions
function add(a: number, b: number): number {
    return a + b;
}

add(5, 5);

// Type inference

let message: string = 'Hello';
let message2 = "Hello";

let numbers2 = [1, 2, 3, 4];

// 
function greet(name: string) { }

let value: string | number = 'Hello';

// let nullNumber: string = null; // ERROR

let optionalName: string | null = null;
let optionalAge: number | undefined = undefined;

// Object

let user: {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
} = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    isActive: true
}

function displayUser(user: { name: string; age: number }): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

displayUser(user);

