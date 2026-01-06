// Exercise 1: Шийдэл бичих хэсэг

const keyboardInput = document.getElementById('keyboard-input')
const outputKeyboard = document.getElementById('output-keyboard')
const keyCtrl = document.getElementById('key-ctrl')
const keyShift = document.getElementById('key-shift')
const keyAlt = document.getElementById('key-alt')
const keyLast = document.getElementById('key-last')

keyboardInput.addEventListener('keydown', (e) => {
    // Modifier keys update
    keyCtrl.classList.toggle('pressed', e.ctrlKey)
    keyShift.classList.toggle('pressed', e.shiftKey)
    keyAlt.classList.toggle('pressed', e.altKey)

    // Last key update
    keyLast.innerHTML = `${e.key}<small>${e.code}</small>`
    keyLast.classList.add('pressed')

    // Log to output
    logKeyEvent('keydown', e)
})

keyboardInput.addEventListener('keyup', (e) => {
    // Modifier keys update
    keyCtrl.classList.toggle('pressed', e.ctrlKey)
    keyShift.classList.toggle('pressed', e.shiftKey)
    keyAlt.classList.toggle('pressed', e.altKey)

    keyLast.classList.remove('pressed')

    logKeyEvent('keyup', e)
})

function logKeyEvent(type, e) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `
        <span class="event-type">${type}</span>:
        key=<span class="key-display">${e.key}</span>
        code=<span class="key-display">${e.code}</span>
    `
    outputKeyboard.appendChild(line)
    outputKeyboard.scrollTop = outputKeyboard.scrollHeight
}


// Exercise 2: Шийдэл бичих хэсэг

const focusUsername = document.getElementById('focus-username')
const focusEmail = document.getElementById('focus-email')
const focusDot = document.getElementById('focus-dot')
const focusCurrent = document.getElementById('focus-current')
const outputFocus = document.getElementById('output-focus')
const hintUsername = document.getElementById('hint-username')
const hintEmail = document.getElementById('hint-email')

// Username events
focusUsername.addEventListener('focus', () => {
    focusDot.classList.add('active')
    focusCurrent.textContent = 'Username'
    hintUsername.textContent = 'Username must be 3-20 characters'
    hintUsername.className = 'input-hint'

    logFocusEvent('focus', 'username')
})

focusUsername.addEventListener('blur', () => {
    focusDot.classList.remove('active')
    focusCurrent.textContent = 'None'

    // Validation
    if (focusUsername.value.length < 3) {
        hintUsername.textContent = 'Username too short!'
        hintUsername.className = 'input-hint error'
    } else {
        hintUsername.textContent = 'Looks good!'
        hintUsername.className = 'input-hint success'
    }

    logFocusEvent('blur', 'username')
})

// Email events (ижил logic)
focusEmail.addEventListener('focus', () => {
    focusDot.classList.add('active')
    focusCurrent.textContent = 'Email'
    hintEmail.textContent = 'Enter a valid email address'
    hintEmail.className = 'input-hint'

    logFocusEvent('focus', 'email')
})

focusEmail.addEventListener('blur', () => {
    focusDot.classList.remove('active')
    focusCurrent.textContent = 'None'

    // Simple email validation
    const isValid = focusEmail.value.includes('@')
    if (focusEmail.value && !isValid) {
        hintEmail.textContent = 'Invalid email format!'
        hintEmail.className = 'input-hint error'
    } else if (isValid) {
        hintEmail.textContent = 'Looks good!'
        hintEmail.className = 'input-hint success'
    }

    logFocusEvent('blur', 'email')
})

function logFocusEvent(type, field) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="event-type">${type}</span>: ${field}`
    outputFocus.appendChild(line)
    outputFocus.scrollTop = outputFocus.scrollHeight
}


// Exercise 3: Шийдэл бичих хэсэг

const inputChangeDemo = document.getElementById('input-change-demo')
const inputCount = document.getElementById('input-count')
const changeCount = document.getElementById('change-count')
const outputInputChange = document.getElementById('output-input-change')

let inputEvents = 0
let changeEvents = 0

inputChangeDemo.addEventListener('input', (e) => {
    inputEvents++
    inputCount.textContent = inputEvents

    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="event-type">input</span>: "${e.target.value}"`
    outputInputChange.appendChild(line)
    outputInputChange.scrollTop = outputInputChange.scrollHeight
})

inputChangeDemo.addEventListener('change', (e) => {
    changeEvents++
    changeCount.textContent = changeEvents

    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="event-type" style="color:#10b981">change</span>: "${e.target.value}"`
    outputInputChange.appendChild(line)
    outputInputChange.scrollTop = outputInputChange.scrollHeight
})


// Exercise 4: Шийдэл бичих хэсэг

const bioInput = document.getElementById('bio-input')
const charCounter = document.getElementById('char-counter')
const maxLength = 150

bioInput.addEventListener('input', (e) => {
    const currentLength = e.target.value.length

    // Counter text update
    charCounter.textContent = `${currentLength} / ${maxLength}`

    // Color class update
    charCounter.className = 'char-counter'

    if (currentLength >= 140) {
        charCounter.classList.add('danger')
    } else if (currentLength >= 120) {
        charCounter.classList.add('warning')
    }
})


// Exercise 5: Шийдэл бичих хэсэг

const previewName = document.getElementById('preview-name')
const previewEmail = document.getElementById('preview-email')
const previewBio = document.getElementById('preview-bio')

const displayName = document.getElementById('display-name')
const displayEmail = document.getElementById('display-email')
const displayBio = document.getElementById('display-bio')

previewName.addEventListener('input', (e) => {
    displayName.textContent = e.target.value || 'Your Name'
})

previewEmail.addEventListener('input', (e) => {
    displayEmail.textContent = e.target.value || 'your@email.com'
})

previewBio.addEventListener('input', (e) => {
    displayBio.textContent = e.target.value || 'Your bio will appear here...'
})



// Exercise 6: Шийдэл бичих хэсэг

const passwordInput = document.getElementById('password-input')
const strengthBar = document.getElementById('strength-bar')
const passwordHint = document.getElementById('password-hint')

passwordInput.addEventListener('input', (e) => {
    const password = e.target.value
    const strength = calculateStrength(password)

    // Reset classes
    strengthBar.className = 'password-strength-bar'

    if (password.length === 0) {
        passwordHint.textContent = 'Enter a password to check strength'
    } else if (strength < 2) {
        strengthBar.classList.add('weak')
        passwordHint.textContent = 'Weak - Add numbers and special characters'
    } else if (strength < 4) {
        strengthBar.classList.add('medium')
        passwordHint.textContent = 'Medium - Could be stronger'
    } else {
        strengthBar.classList.add('strong')
        passwordHint.textContent = 'Strong - Great password!'
    }
})

function calculateStrength(password) {
    let strength = 0

    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
    if (/[A-Z]/.test(password)) strength++  // Uppercase
    if (/[0-9]/.test(password)) strength++  // Number
    if (/[^A-Za-z0-9]/.test(password)) strength++  // Special char

    return strength
}


// Exercise 7: Шийдэл бичих хэсэг

const outputShortcuts = document.getElementById('output-shortcuts')

document.addEventListener('keydown', (e) => {
    // Ctrl+K - Search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        logShortcut('Ctrl+K', 'Search activated!')
    }

    // Ctrl+S - Save
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        logShortcut('Ctrl+S', 'Document saved!')
    }

    // Ctrl+B - Bold
    if (e.ctrlKey && e.key === 'b') {
        e.preventDefault()
        logShortcut('Ctrl+B', 'Bold toggled!')
    }

    // Escape
    if (e.key === 'Escape') {
        logShortcut('Escape', 'Action cancelled!')
    }
})

function logShortcut(shortcut, action) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="key-display">${shortcut}</span> → ${action}`
    outputShortcuts.appendChild(line)
    outputShortcuts.scrollTop = outputShortcuts.scrollHeight
}



// Exercise 8: Шийдэл бичих хэсэг

const searchInput = document.getElementById('search-input')
const outputSearch = document.getElementById('output-search')

// Global shortcut
document.addEventListener('keydown', (e) => {
    // Ctrl+K - Focus search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        searchInput.focus()
        logSearch('Ctrl+K pressed - Search focused')
    }
})

// Search input events
searchInput.addEventListener('keydown', (e) => {
    // Escape - Blur
    if (e.key === 'Escape') {
        searchInput.blur()
        searchInput.value = ''
        logSearch('Escape pressed - Search closed')
    }

    // Enter - Search
    if (e.key === 'Enter') {
        const query = searchInput.value.trim()
        if (query) {
            logSearch(`Searching for: "${query}"`)
        }
    }
})

function logSearch(message) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = message
    outputSearch.appendChild(line)
    outputSearch.scrollTop = outputSearch.scrollHeight
}



// Exercise 9: Шийдэл бичих хэсэг

const tagContainer = document.getElementById('tag-container')
const tagInput = document.getElementById('tag-input')
const tags = []

tagInput.addEventListener('keydown', (e) => {
    // Enter - Add tag
    if (e.key === 'Enter') {
        e.preventDefault()

        const tagText = tagInput.value.trim()
        if (tagText && !tags.includes(tagText)) {
            addTag(tagText)
            tagInput.value = ''
        }
    }

    // Backspace - Remove last tag (if input is empty)
    if (e.key === 'Backspace' && tagInput.value === '' && tags.length > 0) {
        removeTag(tags.length - 1)
    }
})

function addTag(text) {
    tags.push(text)

    const tag = document.createElement('span')
    tag.className = 'tag'
    tag.innerHTML = `
        ${text}
        <span class="tag-remove" data-index="${tags.length - 1}">×</span>
    `

    // Insert before input
    tagContainer.insertBefore(tag, tagInput)

    // Remove button event
    tag.querySelector('.tag-remove').addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index)
        removeTag(index)
    })
}

function removeTag(index) {
    tags.splice(index, 1)
    renderTags()
}

function renderTags() {
    // Remove all tags
    tagContainer.querySelectorAll('.tag').forEach(tag => tag.remove())

    // Re-add all tags
    tags.forEach((text, index) => {
        const tag = document.createElement('span')
        tag.className = 'tag'
        tag.innerHTML = `
            ${text}
            <span class="tag-remove" data-index="${index}">×</span>
        `
        tagContainer.insertBefore(tag, tagInput)

        tag.querySelector('.tag-remove').addEventListener('click', () => {
            removeTag(index)
        })
    })
}



// Exercise 10: Шийдэл бичих хэсэг

const todoInput = document.getElementById('todo-input')
const todoAddBtn = document.getElementById('todo-add-btn')
const todoList = document.getElementById('todo-list')
const todoCount = document.getElementById('todo-count')
const todoCompleted = document.getElementById('todo-completed')

let todos = []
let todoId = 0

// Enter key
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo()
    }
})

// Add button click
todoAddBtn.addEventListener('click', addTodo)

function addTodo() {
    const text = todoInput.value.trim()
    if (!text) return

    const todo = {
        id: todoId++,
        text: text,
        completed: false
    }

    todos.push(todo)
    renderTodos()
    todoInput.value = ''
    todoInput.focus()  // Focus буцаах
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id)
    if (todo) {
        todo.completed = !todo.completed
        renderTodos()
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id)
    renderTodos()
}

function renderTodos() {
    todoList.innerHTML = ''

    todos.forEach(todo => {
        const li = document.createElement('li')
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <span class="todo-delete">🗑️</span>
        `

        // Checkbox event
        li.querySelector('.todo-checkbox').addEventListener('change', () => {
            toggleTodo(todo.id)
        })

        // Delete event
        li.querySelector('.todo-delete').addEventListener('click', () => {
            deleteTodo(todo.id)
        })

        todoList.appendChild(li)
    })

    updateCounts()
}

function updateCounts() {
    todoCount.textContent = todos.length
    todoCompleted.textContent = todos.filter(t => t.completed).length
}


// Гэрийн даалгавар 1
const inputBio = document.getElementById('bio-input');
const counterChar = document.getElementById('char-counter');

let saveTimeout = null;

bioInput.addEventListener('input', () => {
    // Хуучин timer-ийг цуцална
    clearTimeout(saveTimeout);

    // Saving... гэж түр харуулна
    counterChar.textContent = 'Saving...';
    counterChar.className = 'char-counter';

    // Шинэ debounce timer
    saveTimeout = setTimeout(() => {
        counterChar.textContent = '✅ Auto-saved';
        counterChar.classList.add('success');

        console.log('Auto-saved:', inputBio.value);
    }, 2000);
});




// Гэрийн даалгавар 2

let currentIndex = -1;

document.addEventListener('keydown', (e) => {
    const items = document.querySelectorAll('.todo-item');
    if (items.length === 0) return;


    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
        updateActive(items);
    }


    if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateActive(items);
    }
});

function updateActive(items) {
    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');
}

