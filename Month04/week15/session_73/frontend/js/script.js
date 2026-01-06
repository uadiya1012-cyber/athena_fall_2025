// Exercise 1: Шийдэл бичих хэсэг

const outer = document.getElementById('outer')
const middle = document.getElementById('middle')
const inner = document.getElementById('inner')
const outputBubbling = document.getElementById('output-bubbling')
const enableCapture = document.getElementById('enable-capture')
const clearBubbling = document.getElementById('clear-bubbling')

function logEvent(element, phase) {
    const line = document.createElement('div')
    line.className = `output-line ${phase}`
    line.innerHTML = `
        <span class="phase-indicator ${phase}">${phase.toUpperCase()}</span>
        ${element}
    `
    outputBubbling.appendChild(line)
    outputBubbling.scrollTop = outputBubbling.scrollHeight
}

// Bubbling listeners
outer.addEventListener('click', () => logEvent('Outer (grandparent)', 'bubble'))
middle.addEventListener('click', () => logEvent('Middle (parent)', 'bubble'))
inner.addEventListener('click', () => logEvent('Inner (target)', 'target'))

// Capture listeners (checkbox идэвхтэй үед)
function addCaptureListeners() {
    outer.addEventListener('click', () => logEvent('Outer (grandparent)', 'capture'), true)
    middle.addEventListener('click', () => logEvent('Middle (parent)', 'capture'), true)
    inner.addEventListener('click', () => logEvent('Inner (target)', 'capture'), true)
}

enableCapture.addEventListener('change', (e) => {
    if (e.target.checked) {
        addCaptureListeners()
    } else {
        // Page reload хэрэгтэй (listener remove хийхгүй бол)
        location.reload()
    }
})

clearBubbling.addEventListener('click', () => {
    outputBubbling.innerHTML = '<div class="output-line">🌊 Click on any box...</div>'
})



// Exercise 2: Шийдэл бичих хэсэг

const stopOuter = document.getElementById('stop-outer')
const stopMiddle = document.getElementById('stop-middle')
const stopInner = document.getElementById('stop-inner')
const outputPropagation = document.getElementById('output-propagation')

function logStop(element, stopped = false) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = stopped
        ? `🛑 ${element} - STOPPED HERE`
        : `✓ ${element} - received event`
    outputPropagation.appendChild(line)
}

stopOuter.addEventListener('click', () => {
    logStop('Outer')
})

stopMiddle.addEventListener('click', (e) => {
    e.stopPropagation()  // Propagation зогсоох
    logStop('Middle', true)
})

stopInner.addEventListener('click', () => {
    logStop('Inner')
})


// Exercise 3: Шийдэл бичих хэсэг

// const buttonContainer = document.getElementById('button-container')
// const addButtonBtn = document.getElementById('add-button-btn')
// const outputDelegation = document.getElementById('output-delegation')
// let buttonCount = 3

// // Delegation: Container дээр нэг listener
// buttonContainer.addEventListener('click', (e) => {
//     // action-btn class-тай эсэхийг шалгах
//     if (e.target.classList.contains('action-btn')) {
//         const buttonId = e.target.dataset.id

//         const line = document.createElement('div')
//         line.className = 'output-line'
//         line.textContent = `Button ${buttonId} clicked!`
//         outputDelegation.appendChild(line)
//     }
// })

// // Шинэ button нэмэх
// addButtonBtn.addEventListener('click', () => {
//     buttonCount++

//     const newBtn = document.createElement('button')
//     newBtn.className = 'btn btn-secondary action-btn'
//     newBtn.dataset.id = buttonCount
//     newBtn.textContent = `Button ${buttonCount}`

//     buttonContainer.appendChild(newBtn)

//     // Listener нэмэх шаардлагагүй - delegation ажиллана!
// })



// Exercise 3: Button Delegation (гэрийн даалгавар 1)

const buttonContainer = document.getElementById('button-container')
const addButtonBtn = document.getElementById('add-button-btn')
const outputDelegation = document.getElementById('output-delegation')
let buttonCount = 3

// ✅ Delegation: нэг listener
buttonContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.action-btn')
    if (!btn) return

    const id = btn.dataset.id

    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = `Button ${id} clicked`
    outputDelegation.appendChild(line)
})

// ✅ Шинэ button нэмэх (listener нэмэхгүй!)
addButtonBtn.addEventListener('click', () => {
    buttonCount++

    const btn = document.createElement('button')
    btn.className = 'btn btn-secondary action-btn'
    btn.dataset.id = buttonCount
    btn.textContent = `Button ${buttonCount}`

    buttonContainer.appendChild(btn)
})




// Exercise 4: Шийдэл бичих хэсэг

const cardList = document.getElementById('card-list')
const outputCards = document.getElementById('output-cards')

cardList.addEventListener('click', (e) => {
    // Edit button
    const editBtn = e.target.closest('.edit-btn')
    if (editBtn) {
        const card = editBtn.closest('.card-item')
        const cardId = card.dataset.id
        const name = card.querySelector('.card-name').textContent

        logCardAction('edit', cardId, name)
        return
    }

    // Delete button
    const deleteBtn = e.target.closest('.delete-btn')
    if (deleteBtn) {
        const card = deleteBtn.closest('.card-item')
        const cardId = card.dataset.id
        const name = card.querySelector('.card-name').textContent

        logCardAction('delete', cardId, name)
        card.remove()
        return
    }
})

function logCardAction(action, id, name) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<strong>${action.toUpperCase()}</strong>: ${name} (ID: ${id})`
    outputCards.appendChild(line)
}



// Exercise 5: Шийдэл бичих хэсэг

const todoInput = document.getElementById('todo-input')
const todoAddBtn = document.getElementById('todo-add')
const todoList = document.getElementById('todo-list')
let todoId = 3

// Delegation listener
todoList.addEventListener('click', (e) => {
    // Checkbox toggle
    if (e.target.classList.contains('todo-checkbox')) {
        const item = e.target.closest('.todo-item')
        item.classList.toggle('completed')
    }

    // Delete
    if (e.target.classList.contains('todo-delete')) {
        const item = e.target.closest('.todo-item')
        item.remove()
    }
})

// Add new todo
function addTodo() {
    const text = todoInput.value.trim()
    if (!text) return

    todoId++

    const li = document.createElement('li')
    li.className = 'todo-item'
    li.dataset.id = todoId
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${text}</span>
        <span class="todo-delete">🗑️</span>
    `

    todoList.appendChild(li)
    todoInput.value = ''
}

todoAddBtn.addEventListener('click', addTodo)
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo()
})


// Exercise 5: Todo with Delegation (гэрийн даалгавар 2)

// const todoInput = document.getElementById('todo-input')
// const todoAddBtn = document.getElementById('todo-add')
// const todoList = document.getElementById('todo-list')
// let todoId = 3

// // ✅ Delegation
// todoList.addEventListener('click', (e) => {
//     // Checkbox toggle
//     if (e.target.classList.contains('todo-checkbox')) {
//         const item = e.target.closest('.todo-item')
//         item.classList.toggle('completed')
//     }

//     // Delete todo
//     if (e.target.classList.contains('todo-delete')) {
//         const item = e.target.closest('.todo-item')
//         item.remove()
//     }
// })

// // ✅ Шинэ todo нэмэх
// function addTodo() {
//     const text = todoInput.value.trim()
//     if (!text) return

//     todoId++

//     const li = document.createElement('li')
//     li.className = 'todo-item'
//     li.dataset.id = todoId

//     li.innerHTML = `
//         <input type="checkbox" class="todo-checkbox">
//         <span class="todo-text">${text}</span>
//         <span class="todo-delete">🗑️</span>
//   `

//     todoList.appendChild(li)
//     todoInput.value = ''
// }

// todoAddBtn.addEventListener('click', addTodo)

// todoInput.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') addTodo()
// })



// Exercise 6: Шийдэл бичих хэсэг

const tabNav = document.getElementById('tab-nav')

tabNav.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.tab-btn')
    if (!tabBtn) return

    const tabId = tabBtn.dataset.tab

    // Remove active from all buttons
    tabNav.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active')
    })

    // Add active to clicked button
    tabBtn.classList.add('active')

    // Hide all content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active')
    })

    // Show selected content
    document.getElementById(tabId).classList.add('active')
})



// Exercise 7: Шийдэл бичих хэсэг

const dropdownToggle = document.getElementById('dropdown-toggle')
const dropdownMenu = document.getElementById('dropdown-menu')
const outputDropdown = document.getElementById('output-dropdown')

// Toggle dropdown
dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation()  // Document click trigger хийхгүй
    dropdownMenu.classList.toggle('show')
})

// Menu item click - Delegation
dropdownMenu.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item')
    if (!item) return

    const action = item.dataset.action

    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = `Action: ${action}`
    outputDropdown.appendChild(line)

    // Close menu
    dropdownMenu.classList.remove('show')
})

// Click outside to close - Document delegation
document.addEventListener('click', (e) => {
    // Dropdown container-ийн гадна дарсан эсэх
    if (!e.target.closest('#dropdown-container')) {
        dropdownMenu.classList.remove('show')
    }
})



// Exercise 8: Шийдэл бичих хэсэг

const dataTable = document.getElementById('data-table')
const outputTable = document.getElementById('output-table')

dataTable.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    if (!btn) return

    const row = btn.closest('tr')
    const rowId = row.dataset.id

    let action = ''

    if (btn.classList.contains('view-btn')) {
        action = 'VIEW'
    } else if (btn.classList.contains('edit-btn')) {
        action = 'EDIT'
    } else if (btn.classList.contains('delete-btn')) {
        action = 'DELETE'
        row.remove()  // Row устгах
    }

    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = `${action}: Row ID ${rowId}`
    outputTable.appendChild(line)
})


// Exercise 9: Шийдэл бичих хэсэг

const accordion = document.getElementById('accordion')

accordion.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header')
    if (!header) return

    const item = header.closest('.accordion-item')

    // Бусад item-үүдийг хаах (single open)
    accordion.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) {
            i.classList.remove('open')
        }
    })

    // Current item toggle
    item.classList.toggle('open')
})


// Exercise 10: Шийдэл бичих хэсэг

const complexList = document.getElementById('complex-list')
const selectedCount = document.getElementById('selected-count')
const favoriteCount = document.getElementById('favorite-count')

// Initial data
const items = [
    { id: 1, name: 'Item One', email: 'one@example.com' },
    { id: 2, name: 'Item Two', email: 'two@example.com' },
    { id: 3, name: 'Item Three', email: 'three@example.com' },
    { id: 4, name: 'Item Four', email: 'four@example.com' },
]

// Render items
function renderItems() {
    complexList.innerHTML = items.map(item => `
        <div class="card-item" data-id="${item.id}">
            <div class="card-avatar">${item.name[0]}</div>
            <div class="card-info">
                <div class="card-name">${item.name}</div>
                <div class="card-email">${item.email}</div>
            </div>
            <div class="card-actions">
                <button class="btn btn-sm btn-secondary select-btn">Select</button>
                <button class="btn btn-sm btn-primary fav-btn">⭐</button>
                <button class="btn btn-sm btn-danger delete-btn">🗑️</button>
            </div>
        </div>
    `).join('')
}

renderItems()

// Delegation
complexList.addEventListener('click', (e) => {
    const card = e.target.closest('.card-item')
    if (!card) return

    // Select
    if (e.target.closest('.select-btn')) {
        card.classList.toggle('selected')
        updateCounts()
    }

    // Favorite
    if (e.target.closest('.fav-btn')) {
        const btn = e.target.closest('.fav-btn')
        btn.classList.toggle('btn-primary')
        btn.classList.toggle('btn-success')
        updateCounts()
    }

    // Delete
    if (e.target.closest('.delete-btn')) {
        const id = parseInt(card.dataset.id)
        const index = items.findIndex(i => i.id === id)
        items.splice(index, 1)
        card.remove()
        updateCounts()
    }
})

function updateCounts() {
    selectedCount.textContent =
        complexList.querySelectorAll('.card-item.selected').length
    favoriteCount.textContent =
        complexList.querySelectorAll('.fav-btn.btn-success').length
}





