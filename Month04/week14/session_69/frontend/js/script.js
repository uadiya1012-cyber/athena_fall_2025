console.log('DOM Creation Practice Ready!')

const div = document.createElement('div');

const p = document.createElement('p');

const button = document.createElement('button');

const img = document.createElement('img');

const card = document.createElement('div');
card.className = 'card';

card.id = 'card-1';
card.textContent = 'Hello World';

card.setAttribute('data-id', '123');
card.dataset.category = 'tech';

card.style.backgroundColor = '#f0f0f0';
card.style.padding = '20px';

const text = document.createTextNode('Hello, World!');
p.appendChild(text)

const p1 = document.createElement('p');
p1.textContent = 'Hello';

const p2 = document.createElement('p');
p2.appendChild(document.createTextNode('Hello'));

function createCard(title, content, category) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = category;

    //header
    const header = document.createElement('div');
    header.className = 'card-header';

    //title
    const titleEl = document.createElement('h3');
    titleEl.className = 'badge badge-primary';
    titleEl.textContent = title;

    //badge
    const badge = document.createElement('span');
    badge.className = 'badge badge-primary';
    badge.textContent = category;

    header.appendChild(titleEl);
    header.appendChild(badge);

    //body 
    const body = document.createElement('div');
    body.className = 'card-body';
    body.textContent = content;

    // footer
    const footer = document.createElement('div');
    footer.className = 'card-footer';

    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Read more';

    footer.appendChild(btn);

    //merge all
    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);

    return card;

}


const myCard = createCard('Javascript', 'Learn JS Basics', 'Programming');
document.body.appendChild(myCard);

const container = document.getElementsByClassName('container')[0];
console.log(container);
container.appendChild(myCard);


const parent = document.getElementById('todo-list');
const newTodo = document.createElement('li');
newTodo.className = 'list-item todo-item';
newTodo.innerHTML = '<span class="todo-text">New Todo</span>';

parent.appendChild(newTodo);


// many todos using append

const item1 = document.createElement('li');
item1.classList.add('list-item', 'todo-item');
item1.textContent = 'Item 1';

const item2 = document.createElement('li');
item2.classList.add('list-item', 'todo-item');
item2.textContent = 'Item 2';

parent.append(item1, item2, 'plain text');

// prepend
const newItem = document.createElement('li');
newItem.textContent = 'First Item';

parent.prepend(newItem);

// Before
const secondItem = document.querySelector('.todo-item:nth-child(2)');

const beforeItem = document.createElement('li');
beforeItem.className = 'list-item todo-item';
beforeItem.textContent = 'Before the second';
secondItem.before(beforeItem);

//  after
const afterItem = document.createElement('li');
afterItem.classList.add('list-item', 'todo-item');
afterItem.textContent = 'After Second';
secondItem.after(afterItem);


// insert before

const referenceNode = parent.children[1]; // 2nd child

const newNewItem = document.createElement('li');
newNewItem.className = 'list-item todo-item';
newNewItem.textContent = 'Inserted Item';

// referenceNode - iin omno nemeh
parent.insertBefore(newNewItem, referenceNode);




// tugsguld ni nemeh
parent.insertBefore(newNewItem, null); // similar to appendChild


// insertAdjacentHTML
const firstCard = document.querySelector('.card');

// 4 байрлал:
// 'beforebegin' - Элементийн өмнө (sibling)
// 'afterbegin'  - Элемент дотор эхэнд (child)
// 'beforeend'   - Элемент дотор төгсгөлд (child)
// 'afterend'    - Элементийн хойно (sibling)

firstCard.insertAdjacentHTML('beforebegin', '<p>Before the card</p>');
firstCard.insertAdjacentHTML('afterbegin', '<h4>First inside</h4>');
firstCard.insertAdjacentHTML('beforeend', '<p>Last inside</p>');
firstCard.insertAdjacentHTML('afterend', '<p>After the card</p>');


// Remove
// const firstItem = document.querySelector('.todo-item');
// firstItem.remove();

// Baihgui bol aldaa garahgui
// const nonExistent = document.getElementById('fake');
// if (nonExistent) {
//     nonExistent.remove()
// }

// const child = parent.firstElementChild;
// huuhdiig ustgah
// const removed = parent.removeChild(child);
// console.log(removed); // ustgasan elementiig butsaana

// buh huuhdiig ustgaj bolno
// while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
// }

// iluu hylbar
// parent.innerHTML = '' // bugdiig ustgana


// replaceWith
const oldElement = document.querySelector('.todo-item');

const newElement = document.createElement('li');
newElement.className = 'list-item todo-item';
newElement.textContent = 'Replaced item';
oldElement.replaceWith(newElement);


// documentFragment

const productsContainer = document.getElementById('products-container');

// buruu dom 100 udaa oorchlolt hiine
for (let i = 0; i < 100; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${i}`;
    productsContainer.appendChild(item);  // Reflow/repaint 100 udaa
}

// zuw dom 1 udaa oorchlolt hiine
const fragment = document.createDocumentFragment()

for (let i = 0; i < 100; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${i}`;
    fragment.appendChild(item); // memory d nemegdene
}

productsContainer.appendChild(fragment);  // reflow/repaint 1 udaa