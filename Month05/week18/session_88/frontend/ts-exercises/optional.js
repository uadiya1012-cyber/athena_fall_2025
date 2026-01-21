function greet(name, greeting) {
    return "".concat(greeting !== null && greeting !== void 0 ? greeting : "Hello", ", ").concat(name);
}
function createUser(name, age, email) {
    return {
        name: name,
        age: age,
        email: email,
    };
}
