let myHeading = document.getElementById("my-heading");
myHeading.textContent = "This is my heading";
myHeading.style.backgroundColor = "black";
myHeading.style.color = "white";
myHeading.style.textAlign = "center";

let box1 = document.getElementById("box-1");
box1.innerHTML = `
    <h2>Box 1 Heading</h2>
    <p>Box 1 paragraph</p>
    <button class="click-btn" id="click">Click</button>
    <button id="remove-bg">Remove BG</button>
`;

let click = document.getElementById("click");
click.onclick = function () {
    box1.classList.add("highlight");
}

let removeBg = document.getElementById("remove-bg");
removeBg.onclick = function () {
    box1.classList.remove("highlight");
}

let nameInput = document.getElementById("name-input");


let addBtn = document.getElementById("add-btn");
let nameBox = document.getElementById("name-box")

addBtn.onclick = function () {
    let nameValue = nameInput.value;
    let h3 = document.createElement("h3");
    h3.textContent = nameValue;

    nameBox.appendChild(h3);
}

let body = document.body;

let modeChangeBtn = document.getElementById("mode-change-btn");

modeChangeBtn.onclick = function () {
    body.classList.toggle("dark");
}

let fruits = ["apple", "orange", "kiwi", "banana", "watermelon"];
let fruitImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
    "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
    "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg"
];

let box2 = document.getElementById("box-2");
let getBtn = document.getElementById("get-fruits");


// for (let fruit of fruits) {
//     let p = document.createElement("p");
//     p.textContent = fruit;
//     box2.appendChild(p);
// }



getBtn.onclick = function () {
    for (let i = 0; i < fruits.length; i++) {
        let fruitName = document.createElement("h3");
        fruitName.textContent = fruits[i];
        fruitName.classList.add(fruits[i]);

        let fruitImage = document.createElement("img");
        fruitImage.src = fruitImages[i];
        fruitImage.style.width = "200px";

        box2.appendChild(fruitName);
        box2.appendChild(fruitImage);
    }
}




