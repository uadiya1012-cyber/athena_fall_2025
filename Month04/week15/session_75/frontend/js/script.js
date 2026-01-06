// ===== STATE =====
// Application state - Бүх өгөгдөл энд хадгалагдана
let todos = []
let currentFilter = 'all'
let nextId = 1

// ===== DOM ELEMENTS =====
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const charCount = document.getElementById('char-count');

// Filter elements
const filterBtns = document.querySelectorAll('.filter-btn');
const countAll = document.getElementById('count-all');
const countActive = document.getElementById('count-active');
const countCompleted = document.getElementById('count-completed');
const itemsLeft = document.getElementById('items-left');

// Action buttons
const toggleAllBtn = document.getElementById('toggle-all-btn');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

// ===== CONSTANTS =====
const STORAGE_KEY = 'todo-app-data'


// exercise 1 Save to storage
function saveToStorage() {
    // TODO: Implement this function
    const data = { todos: todos, nextId: nextId }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};


// exercise 2 Load from storage
function loadFromStorage() {
    // TODO: Implement this function
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const parsed = JSON.parse(data);
            todos = parsed.todos || []
            nextId = parsed.nextId || 1
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// exercise 3 Add todo
function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return false;

    const todo = {
        id: nextId++,
        text: trimmed,
        completed: false,
        createdAt: new Date().toISOString()
    }
    todos.push(todo);
    saveToStorage();
    render();
    return true
}

// exercise 4 Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveToStorage();
    render();
}


// exercise 5 Toggle todo
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed
    }
    saveToStorage();
    render();
}


// exercise 6 Update todo
function updateTodo(id, newText) {
    const trimmed = newText.trim();
    if (!trimmed) {
        deleteTodo(id)
        return
    }

    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.text = trimmed
        saveToStorage();
        render();
    }
}

// exercise 7 Toggle all
function toggleAll() {
    const allCompleted = todos.every(t => t.completed)
    todos.forEach(t => (t.completed = !allCompleted))
    saveToStorage();
    render();
}

// exercise 8 Clear completed
function clearCompleted() {
    todos = todos.filter(t => !t.completed);
    saveToStorage();
    render();
}

// exercise 9
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos
    }
}

// exercise 10 Set filter
function setFilter(filter) {
    currentFilter = filter
    filterBtns.forEach(btn =>
        btn.classList.toggle('active', btn.dataset.filter === filter));
    render();
}

// exercise 11 Render
function render() {
    const filteredTodos = getFilteredTodos();
    todoList.innerHTML = ''

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });
    updateCounts();
    updateEmptyState(filteredTodos);
}

// exercise 12 Create todo element
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item'
    if (todo.completed) li.classList.add('completed');
    li.dataset.id = todo.id

    const dataStr = new Date(todo.createdAt).toLocaleDateString();

    li.innerHTML = `
    <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
    <span class="todo-text">${escapeHtml(todo.text)}</span>
    <span class="todo-date">${dataStr}</span>
    <div class="todo-actions">
        <button class="todo-action-btn edit">Edit</button>
        <button class="todo-action-btn delete">Delete</button>
    </div>
    `
    return li
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text
    return div.innerHTML
}

// exercise 13 Update counts
function updateCounts() {
    const all = todos.length
    const active = todos.filter(t => !t.completed).length
    const completed = todos.filter(t => t.completed).length

    countAll.textContent = all
    countActive.textContent = active
    countCompleted.textContent = completed
    itemsLeft.textContent = active
}

// exercise 14 Update empty state
function updateEmptyState(filteredTodos) {
    if (todos.length === 0 || filteredTodos.length === 0) {
        emptyState.classList.add('show')
    } else {
        emptyState.classList.remove('show')
    }
}

// exercise 15 Start editing
function startEditing(todoItem, id) {
    const todo = todos.find(t => t.id === id)
    if (!todo) return

    const span = todoItem.querySelector('.todo-text');
    const input = document.createElement('input');
    input.className = 'todo-edit-input'
    input.value = todo.text

    span.replaceWith(input);
    input.focus();
    input.select();

    function save() {
        updateTodo(id, input.value);
    }

    function cancel() {
        render();
    }

    input.addEventListener('blur', save)
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') save();
        if (e.key === 'Escape') cancel();
    });
}

// exercise 16 Form submit

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (addTodo(todoInput.value)) {
        todoInput.value = ''
        charCount.textContent = '0'
    }
});


// exercise 17 Character counter
todoInput.addEventListener('input', (e) => {
    charCount.textContent = e.target.value.length
});


// exercise 18 Escape key
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        todoInput.value = ''
        charCount.textContent = '0'
    }
});


// exercise 19 Filter buttons (event delegation)
document.getElementById('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (btn) setFilter(btn.dataset.filter);
});

// exercise 20 Todo list clicks (event delegation)
todoList.addEventListener('click', (e) => {
    const item = e.target.closest('.todo-item');
    if (!item) return

    const id = parseInt(item.dataset.id);

    if (e.target.classList.contains('todo-checkbox')) toggleTodo(id);
    if (e.target.classList.contains('delete')) deleteTodo(id);
    if (e.target.classList.contains('edit')) startEditing(item, id);
});


// exercise 21 Double-Click to Edit
todoList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('todo-text')) {
        const item = e.target.closest('.todo-item');
        startEditing(item, parseInt(item.dataset.id));
    }
});

// exercise 22-23: Action Buttons

toggleAllBtn.addEventListener('click', toggleAll)
clearCompletedBtn.addEventListener('click', clearCompleted)


// exercise 24 Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'a' && document.activeElement !== todoInput) {
        e.preventDefault();
        toggleAll();
    }
});

// exercise 25 init

function init() {
    loadFromStorage();
    render();
    todoInput.focus();
    console.log('Todo App initialized!');
}

init();





