// ==========================================
// Exercise 1: Content Manipulation
// ==========================================
// АЛХАМ 1: Elements сонгох
let message = document.getElementById('message');
let outputArea = document.getElementById('output-area');
let textInput = document.getElementById('text-input');
let buttonArea = document.getElementById('button-area');

// АЛХАМ 2: Button-уудыг үүсгэх
function createButton(text, className, onClick) {
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.className = `btn ${className}`;
    btn.onclick = onClick;
    return btn;
}

// Button 1: textContent ашиглах
let btn1 = createButton('Set Text', 'btn-primary', function () {
    message.textContent = textInput.value || 'Default text';
});
buttonArea.appendChild(btn1);

// Button 2: innerHTML ашиглах
let btn2 = createButton('Set HTML', 'btn-success', function () {
    let input = textInput.value || '<b>Bold</b> and <i>Italic</i>';
    outputArea.innerHTML = input;
});
buttonArea.appendChild(btn2);

// Button 3: Clear all
let btn3 = createButton('Clear', 'btn-danger', function () {
    message.textContent = '';
    outputArea.innerHTML = '';
    textInput.value = '';
});
buttonArea.appendChild(btn3);

// Button 4: Get values
let btn4 = createButton('Get Values', 'btn-secondary', function () {
    console.log('Message textContent:', message.textContent);
    console.log('Output innerHTML:', outputArea.innerHTML);
    console.log('Input value:', textInput.value);
    alert(`Input value: ${textInput.value}`);
});
buttonArea.appendChild(btn4);


// Button 5: Count

let count = 0;
let btn5 = createButton('Count: 0', 'btn-primary', function () {
    count++;
    btn5.textContent = `Counter: ${count}`;
    message.textContent = `Counted: ${count} times`;
});
buttonArea.appendChild(btn5);

// Uppercase button

let btn6 = createButton('UPPUERCASE', 'btn-secondary', function () {
    outputArea.textContent = textInput.value.toUpperCase();
});
buttonArea.appendChild(btn6);


// Reverse button

let btn7 = createButton('Reverse', 'btn-secondary', function () {
    outputArea.textContent = textInput.value
        .split('')
        .reverse()
        .join('');
});

buttonArea.appendChild(btn7);


// Character count

let charInfo = document.createElement('p');
buttonArea.appendChild(charInfo);

textInput.oninput = function () {
    charInfo.textContent = `Characters: ${this.value.length}`;
};


// ==========================================
// Exercise 2: Style Manipulation
// ==========================================
let styleBox = document.getElementById('style-box');
let styledText = document.getElementById('styled-text');
let styleControls = document.getElementById('style-controls');

// ==========================================
// style property ашиглах
// ==========================================
// Color picker
let colorLabel = document.createElement('label');
colorLabel.textContent = 'Text Color: ';
let colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.value = '#000000';
colorInput.oninput = function () {
    styledText.style.color = this.value;
};
colorLabel.appendChild(colorInput);
styleControls.appendChild(colorLabel);

// Background color picker
let bgLabel = document.createElement('label');
bgLabel.textContent = ' Background: ';
let bgInput = document.createElement('input');
bgInput.type = 'color';
bgInput.value = '#ffffff';
bgInput.oninput = function () {
    styleBox.style.backgroundColor = this.value;
};
bgLabel.appendChild(bgInput);
styleControls.appendChild(bgLabel);

// Font size slider
let sizeLabel = document.createElement('label');
sizeLabel.textContent = ' Font Size: ';
let sizeInput = document.createElement('input');
sizeInput.type = 'range';
sizeInput.min = '12';
sizeInput.max = '48';
sizeInput.value = '16';
sizeInput.oninput = function () {
    styledText.style.fontSize = this.value + 'px';
};
sizeLabel.appendChild(sizeInput);
styleControls.appendChild(sizeLabel);

styleControls.appendChild(document.createElement('br'));
styleControls.appendChild(document.createElement('br'));

// ==========================================
// classList ашиглах
// ==========================================
// Highlight toggle
let btnHighlight = document.createElement('button');
btnHighlight.textContent = 'Toggle Highlight';
btnHighlight.className = 'btn btn-primary';
btnHighlight.onclick = function () {
    styleBox.classList.toggle('highlight');
};
styleControls.appendChild(btnHighlight);

// Success style
let btnSuccess = document.createElement('button');
btnSuccess.textContent = 'Success';
btnSuccess.className = 'btn btn-success';
btnSuccess.onclick = function () {
    styleBox.classList.remove('error', 'highlight');
    styleBox.classList.add('success');
};
styleControls.appendChild(btnSuccess);

// Error style
let btnError = document.createElement('button');
btnError.textContent = 'Error';
btnError.className = 'btn btn-danger';
btnError.onclick = function () {
    styleBox.classList.remove('success', 'highlight');
    styleBox.classList.add('error');
};
styleControls.appendChild(btnError);

// Reset styles
let btnReset = document.createElement('button');
btnReset.textContent = 'Reset';
btnReset.className = 'btn btn-secondary';
btnReset.onclick = function () {
    styleBox.classList.remove('success', 'error', 'highlight');
    styleBox.style.cssText = 'padding: 20px; text-align: center;';
    styledText.style.cssText = '';
};
styleControls.appendChild(btnReset);


// TODO 1: Border radius slider нэмэх
// - 0px-ээс 50px хүртэл
// - styleBox-ын borderRadius өөрчлөх
let radiusInput = document.createElement('input');
radiusInput.type = 'range';
radiusInput.min = 0;
radiusInput.max = 50;
radiusInput.oninput = function () {
    styleBox.style.borderRadius = this.value + 'px';
};
styleControls.appendChild(radiusInput);




// TODO 2: Font family selector нэмэх
// - <select> үүсгэх: Arial, Georgia, Courier New, Comic Sans MS
// - styledText.style.fontFamily өөрчлөх
let fontSelect = document.createElement('select');
['Arial', 'Georgia', 'Courier New', 'Comic Sans MS'].forEach(font => {
    let option = document.createElement('option');
    option.value = font;
    option.textContent = font;
    fontSelect.appendChild(option);
});

fontSelect.onchange = function () {
    styledText.style.fontFamily = this.value;
};

styleControls.appendChild(fontSelect);


// TODO 3: Padding slider нэмэх
// - 0px-ээс 50px хүртэл
// - styleBox.style.padding өөрчлөх
let paddingInput = document.createElement('input');
paddingInput.type = 'range';
paddingInput.min = 0;
paddingInput.max = 50;

paddingInput.oninput = function () {
    styleBox.style.padding = this.value + 'px';
};

styleControls.appendChild(paddingInput);



// TODO 4: Bold/Italic toggle buttons
// - classList эсвэл style.fontWeight ашиглах

let boldBtn = document.createElement('button');
boldBtn.textContent = 'Bold';
boldBtn.onclick = () =>
    styledText.style.fontWeight =
    styledText.style.fontWeight === 'bold' ? 'normal' : 'bold';

let italicBtn = document.createElement('button');
italicBtn.textContent = 'Italic';
italicBtn.onclick = () =>
    styledText.style.fontStyle =
    styledText.style.fontStyle === 'italic' ? 'normal' : 'italic';

styleControls.appendChild(boldBtn);
styleControls.appendChild(italicBtn);


// ==========================================
// Exercise 3: Dynamic Task List
// ==========================================
// Elements
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');
let taskList = document.getElementById('task-list');
let totalTasks = document.getElementById('total-tasks');
let completedTasks = document.getElementById('completed-tasks');

// Task counter
let taskCounter = { total: 0, completed: 0 };

// ==========================================
// STEP 1: Stats update функц
// ==========================================
function updateStats() {
    totalTasks.textContent = `Нийт: ${taskCounter.total}`;
    completedTasks.textContent = `Дууссан: ${taskCounter.completed}`;
}

// ==========================================
// STEP 2: Task item үүсгэх функц
// ==========================================
function createTaskItem(taskText) {
    // Li element
    let li = document.createElement('li');
    li.className = 'task-item';

    // Checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        li.classList.toggle('completed');
        if (this.checked) {
            taskCounter.completed++;
        } else {
            taskCounter.completed--;
        }
        updateStats();
    };

    // Task text span
    let span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    // Edit functionality (double click)
    span.ondblclick = function () {
        let input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        input.className = 'input-field';
        input.style.margin = '0';

        input.onblur = function () {
            span.textContent = input.value || span.textContent;
            li.replaceChild(span, input);
        };

        input.onkeydown = function (e) {
            if (e.key === 'Enter') {
                input.blur();
            }
            if (e.key === 'Escape') {
                li.replaceChild(span, input);
            }
        };

        li.replaceChild(input, span);
        input.focus();
    };

    // Delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.onclick = function () {
        if (checkbox.checked) {
            taskCounter.completed--;
        }
        taskCounter.total--;
        li.remove();
        updateStats();
    };

    // Assemble
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// ==========================================
// STEP 3: Task нэмэх функц
// ==========================================
function addTask() {
    let text = taskInput.value.trim();

    if (text === '') {
        taskInput.classList.add('error');
        setTimeout(() => taskInput.classList.remove('error'), 500);
        return;
    }

    let taskItem = createTaskItem(text);
    taskList.appendChild(taskItem);

    taskCounter.total++;
    updateStats();

    taskInput.value = '';
    taskInput.focus();
}

// ==========================================
// STEP 4: Event listeners
// ==========================================

addTaskBtn.onclick = addTask;

taskInput.onkeydown = function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
};

// ==========================================
// STEP 5: Анхны tasks нэмэх
// ==========================================

['HTML сурах', 'CSS сурах', 'JavaScript сурах'].forEach(task => {
    taskInput.value = task;
    addTask();
});



// TODO 1: Clear All button нэмэх
// - Бүх tasks устгах
// - Stats reset хийх

let clearAllBtn = document.createElement('button');
clearAllBtn.textContent = 'Clear All';
clearAllBtn.className = 'btn btn-danger';
clearAllBtn.onclick = function () {
    taskList.innerHTML = '';
    taskCounter.total = 0;
    taskCounter.completed = 0;
    updateStats();
};

taskList.parentElement.appendChild(clearAllBtn);


// TODO 2: Clear Completed button нэмэх
// - Зөвхөн completed tasks устгах
// - Stats update хийх
let clearCompletedBtn = document.createElement('button');
clearCompletedBtn.textContent = 'Clear Completed';
clearCompletedBtn.className = 'btn btn-danger';

clearCompletedBtn.onclick = function () {
    document.querySelectorAll('.task-item.completed').forEach(item => {
        item.remove();
        taskCounter.completed--;
        taskCounter.total--;
    });
    updateStats();
};

taskList.parentElement.appendChild(clearCompletedBtn);



// TODO 3: Filter buttons нэмэх
// - All: бүгдийг харуулах
// - Active: completed биш
// - Completed: зөвхөн completed

function filterTasks(type) {
    document.querySelectorAll('.task-item').forEach(item => {
        if (type === 'all') item.style.display = 'flex';
        if (type === 'active')
            item.style.display = item.classList.contains('completed') ? 'none' : 'flex';
        if (type === 'completed')
            item.style.display = item.classList.contains('completed') ? 'flex' : 'none';
    });
}


// TODO 4: Task тоог localStorage-д хадгалах
// - localStorage.setItem('tasks', JSON.stringify([...]))
// - Page reload хийхэд tasks буцааж харуулах

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('.task-item').forEach(item => {
        tasks.push({
            text: item.querySelector('.task-text').textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ==========================================
// Exercise 4: Card Builder
// ==========================================
let cardTitle = document.getElementById('card-title');
let cardDescription = document.getElementById('card-description');
let cardColor = document.getElementById('card-color');
let createCardBtn = document.getElementById('create-card-btn');
let cardContainer = document.getElementById('card-container');

// ==========================================
// Card үүсгэх функц
// ==========================================
function createCard(title, description, color) {
    // Card container
    let card = document.createElement('div');
    card.className = 'card';
    card.style.borderLeft = `4px solid ${color}`;

    // Header
    let header = document.createElement('div');
    header.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';

    // Title
    let titleEl = document.createElement('div');
    titleEl.className = 'card-title';
    titleEl.textContent = title;
    titleEl.style.color = color;

    // Close button
    let closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
    `;
    closeBtn.onclick = function () {
        card.style.opacity = '0';
        card.style.transform = 'translateX(100px)';
        setTimeout(() => card.remove(), 300);
    };

    header.appendChild(titleEl);
    header.appendChild(closeBtn);

    // Description
    let descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.style.color = '#666';

    // Footer with timestamp
    let footer = document.createElement('div');
    footer.style.cssText = 'margin-top: 10px; font-size: 12px; color: #999;';
    footer.textContent = `Created: ${new Date().toLocaleString()}`;

    // Actions
    let actions = document.createElement('div');
    actions.style.marginTop = '10px';

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-secondary';
    editBtn.style.cssText = 'padding: 5px 10px; font-size: 12px;';
    editBtn.onclick = function () {
        let newTitle = prompt('New title:', titleEl.textContent);
        let newDesc = prompt('New description:', descEl.textContent);
        if (newTitle) titleEl.textContent = newTitle;
        if (newDesc) descEl.textContent = newDesc;
    };

    let duplicateBtn = document.createElement('button');
    duplicateBtn.textContent = 'Duplicate';
    duplicateBtn.className = 'btn btn-secondary';
    duplicateBtn.style.cssText = 'padding: 5px 10px; font-size: 12px;';
    duplicateBtn.onclick = function () {
        let clone = card.cloneNode(true);
        // Re-attach event listeners (simplified)
        clone.querySelector('button').onclick = function () {
            clone.remove();
        };
        cardContainer.appendChild(clone);
    };

    actions.appendChild(editBtn);
    actions.appendChild(duplicateBtn);

    // Assemble card
    card.appendChild(header);
    card.appendChild(descEl);
    card.appendChild(actions);
    card.appendChild(footer);

    // Animation
    card.style.cssText += `
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
    `;

    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 10);

    return card;
}

// ==========================================
// Event listener
// ==========================================

createCardBtn.onclick = function () {
    let title = cardTitle.value.trim() || 'Untitled';
    let description = cardDescription.value.trim() || 'No description';
    let color = cardColor.value;

    let card = createCard(title, description, color);
    cardContainer.appendChild(card);

    // Clear inputs
    cardTitle.value = '';
    cardDescription.value = '';
};


// TODO 1: Card-д priority badge нэмэх
// - High (red), Medium (yellow), Low (green)
// - Select element нэмэх
let badge = document.createElement('span');
badge.textContent = 'High';
badge.style.color = 'red';
header.appendChild(badge);


// TODO 2: Card-ыг drag хийх боломжтой болгох
// - card.draggable = true;
// - Ondragstart, ondragover, ondrop
// TODO 3: Card-уудыг sort хийх
// - By date, by title


// ==========================================
// Exercise 5: Theme Toggle
// ==========================================
let themeToggleBtn = document.getElementById('theme-toggle-btn');
let isDarkMode = false;

themeToggleBtn.onclick = function () {
    document.body.classList.toggle('dark-theme');
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }

    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
};

// Load saved preference
if (localStorage.getItem('darkMode') === 'true') {
    themeToggleBtn.click();
}


// TODO: Multiple theme system үүсгэх
// Themes
const themes = {
    light: {
        body: '#f5f5f5',
        container: '#ffffff',
        text: '#333333',
        primary: '#007bff'
    },
    dark: {
        body: '#1a1a2e',
        container: '#16213e',
        text: '#eeeeee',
        primary: '#4a9fff'
    },
    nature: {
        body: '#e8f5e9',
        container: '#ffffff',
        text: '#2e7d32',
        primary: '#4caf50'
    },
    sunset: {
        body: '#fff3e0',
        container: '#ffffff',
        text: '#e65100',
        primary: '#ff9800'
    }
};


function applyTheme(theme) {
    document.body.style.backgroundColor = themes[theme].body;
    document.body.style.color = themes[theme].text;
    localStorage.setItem('theme', theme);
}


// TODO 1: Theme selector dropdown үүсгэх
// TODO 2: applyTheme(themeName) функц бичих
// TODO 3: Custom theme үүсгэх боломж (color pickers)
// TODO 4: Theme-ийг localStorage-д хадгалах





