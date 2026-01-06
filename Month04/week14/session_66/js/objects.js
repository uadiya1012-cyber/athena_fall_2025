let task = {
    id: 1,
    title: "Learn Python",
    description: "Create REST API",
    completed: false,
    created_at: "2025-12-15"
};
console.log(task.id);

let user = {
    id: 1,
    name: "Bold",
    email: "bold@gmail.com",
    age: 25,
    role: "admin"
}

let taskWithUser = {
    id: 1,
    title: "Learn Python",
    completed: false,
    user: {
        id: 1,
        name: "Bold",
        email: "bold@gmail.com"
    },
    tags: ["programming", "backend"]
};
console.log(taskWithUser.user.name);
console.log(taskWithUser.tags[1]);
console.log(taskWithUser["title"]);

let key = "title";
console.log(taskWithUser[key]);

let obj = {
    "full name": "Bold Bataa",
    "is-admin": true,
    "created-at": "2025-12-15"
}
console.log(obj["full name"]);

task.priority = "high";
console.log(task);

task.completed = true;
console.log(task);

console.log("title" in task);
console.log("date" in task);

delete task.priority;
console.log(task);

let keys = Object.keys(task);
console.log(keys);

keys.forEach(key => {
    console.log(`${key}: ${task[key]}`);
});

let values = Object.values(task);
console.log(values);

let entries = Object.entries(task);
console.log(entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

let newTask = {
    id: 2,
    title: "Learn JavaScript",
    completed: false,
    toggle: function () {
        this.completed = !this.completed;
    },
    getStatus: function () {
        return this.completed ? "Done" : "In Progress";
    },
    getInfo: function () {
        return `Task #${this.id}: ${task.title} - ${this.getStatus()}`;
    }
};

console.log(newTask.getStatus());
console.log(newTask.getInfo());

newTask.toggle();
console.log(newTask.getStatus());

let copyTask = {};
Object.assign(copyTask, newTask);
console.log(copyTask);

copyTask.id = 3;
copyTask.title = "Learn CSS";
console.log(copyTask);

let objTask = {
    id: 1,
    title: "Learn Python",
    completed: false,
};
console.log(typeof objTask);

// JSON String
let jsonString = '{"id": 1, "title": "Learn Python", "completed": false}';
console.log(typeof jsonString);


let jsonTaskString = JSON.stringify(objTask);
console.log(jsonTaskString);

let objJsonString = JSON.parse(jsonString);
console.log(objJsonString);



