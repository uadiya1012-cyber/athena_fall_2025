// Variables
var firstName = "Alice";
var age = 25;
var isStudent = false;
// arrays
var numbers = [1, 2, 3];
var names = ["Alice", "Bob"];
// Functions
function add(a, b) {
    return a + b;
}
add(5, 5);
// Type inference
var message = 'Hello';
var message2 = "Hello";
var numbers2 = [1, 2, 3, 4];
// 
function greet(name) { }
var value = 'Hello';
// let nullNumber: string = null; // ERROR
var optionalName = null;
var optionalAge = undefined;
// Object
var user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    isActive: true
};
function displayUser(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
}
displayUser(user);
