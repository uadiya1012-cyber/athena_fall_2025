let title = document.getElementById("title");
console.log(title);

title.textContent = "My title";
title.style.color = "violet";
title.style.backgroundColor = "black";

console.log(title.textContent);

let container = document.getElementById("container");
container.innerHTML = `
    <h2>Гарчиг</h2>
    <p>Параграф</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
`;

let usernameInput = document.getElementById("username");
console.log(usernameInput.value);
let ageInput = document.getElementById("age");
console.log(ageInput.value);
console.log(typeof ageInput.value);

ageInput.value = 30;
let age = parseInt(ageInput.value);
console.log(age, typeof age);

let emailInput = document.getElementById("email");
if (emailInput.value === "") {
    console.log("Email оруулна уу.");
}

let hello = document.getElementById("hello");

hello.style.cssText = `
    color: white;
    background-color: blue;
    font-size: 40px;
`;

let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");

text2.classList.add("highlight");
text2.classList.add("large");

text2.classList.add("important", "active");

text1.classList.remove("highlight");

text1.classList.toggle("hidden");
text1.classList.toggle("hidden");


let showBtn = document.getElementById("showBtn");
let content = document.getElementById("content");

showBtn.onclick = function () {
    content.classList.toggle("hidden");
}

if (text1.classList.contains("highlight")) {
    console.log("Text 1 highlighted.");
} else {
    console.log("No highlight");
}

let newElement = document.createElement("div");
newElement.textContent = "My new element";

container.appendChild(newElement);


let taskList = document.getElementById("task-list");

let newTask = document.createElement("li");
newTask.textContent = "Task 3";
taskList.appendChild(newTask);

newTask.id = "task-3";
console.log(newTask);

function addTask(taskText) {
    let li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);
}
addTask("Task 4");
addTask("Task 5");
addTask("Task 6");

// үр дүн адилхан
// newTask.remove();
taskList.removeChild(newTask);


let deleteBtn = document.getElementById("deleteBtn");

let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task");

function addTaskWithDelete(taskText) {
    let li = document.createElement("li");
    li.textContent = taskText;

    deleteBtn.onclick = function () {
        li.remove();
    }

    taskList.appendChild(li);
}

addTaskWithDelete("My next task");

addTaskBtn.onclick = function () {
    addTaskWithDelete(taskInput.value);
}