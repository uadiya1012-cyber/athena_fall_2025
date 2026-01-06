// Object мэдээллийн бүтэц:

// let task = {
//     id: 1,
//     title: 'Python сурах',
//     description: 'REST API бүтээх',
//     completed: false,
//     created_at: '2024-12-10'
// };

// console.log(task.id);
// console.log(task.title);
// console.log(task.completed);

// Object Syntax

// 1 hooson object
let emptyObject = {};

// 2 Task object (REST API style)
let task = {
    id: 1,
    title: 'Python сурах',
    description: 'REST API бүтээх',
    completed: false,
    created_at: '2024-12-10T10:30:00'
};

// 3 User object
let user = {
    id: 1,
    name: 'Болд',
    email: 'bold@example.com',
    age: 25,
    role: 'admin'
};

// 4 Nested object (объект доторх объект)
let taskWithUser = {
    id: 1,
    title: 'Python сурах',
    completed: false,
    user: {
        id: 1,
        name: 'Болд',
        email: 'bold@example.com'
    },
    tags: ['programming', 'backend']
};

console.log(taskWithUser.user.name);
console.log(taskWithUser.tags[0]);