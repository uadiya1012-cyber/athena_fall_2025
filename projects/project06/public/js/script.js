// Бүрэн ажиллах тооны машин
const app = document.getElementById('app');
const output = document.getElementById('output');
const historyEl = document.getElementById('history');

let current = '0';
let previous = null;
let operation = null;
let overwrite = false;

function formatNumber(str) {
    return str;
}

function updateDisplay() {
    output.textContent = formatNumber(current);
    historyEl.textContent = previous !== null ? `${previous} ${operation ?? ''}` : '';
}

function inputDigit(d) {
    if (overwrite || current === '0') {
        current = d;
        overwrite = false;
    } else {
        current = current + d;
    }
}

function inputDot() {
    if (overwrite) {
        current = '0.';
        overwrite = false;
        return
    }
    if (!current.includes('.')) current += '.';
}

function clearAll() {
    current = '0';
    previous = null;
    operation = null;
    overwrite = false;
}

function clearEntry() {
    current = '0';
    overwrite = false;
}

function deleteLast() {
    if (overwrite || current.length === 1) {
        current = '0';
        overwrite = false;
    } else {
        current = current.slice(0, -1);
    }
}

function chooseOperation(op) {
    if (operation && !overwrite) {
        compute();
    }
    previous = current;
    operation = op;
    overwrite = true;
}

function percent() {
    let val = parseFloat(current);
    if (isNaN(val)) return;
    val = val / 100;
    current = String(val);
    overwrite = true;
}


function compute() {
    if (!operation || previous === null) return;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return;
    let res;
    switch (operation) {
        case '+': res = prev + curr; break;
        case '-': res = prev - curr; break;
        case 'x': res = prev * curr; break;
        case '÷': res = curr === 0 ? 'Error' : prev / curr; break;
        default: return;
    }
    current = String(res);
    previous = null;
    operation = null;
    overwrite = true;
}


document.querySelectorAll('button.key').forEach(btn => {
    btn.addEventListener('click', () => {
        const act = btn.dataset.action;
        const val = btn.textContent.trim();
        if (act === 'digit') inputDigit(val);
        else if (act === 'dot') inputDot();
        else if (act === 'operator') {
            const map = { '+': '+', '-': '-', 'x': 'x', '÷': '÷' };
            chooseOperation(map[val]);
        }
        updateDisplay();
    });
});


document.getElementById('equals').addEventListener('click', () => {
    compute();
    updateDisplay();
});

document.getElementById('acBtn').addEventListener('click', () => {
    clearAll();
    updateDisplay();
});

document.getElementById('cBtn').addEventListener('click', () => {
    clearEntry();
    updateDisplay();
});

document.getElementById('backBtn').addEventListener('click', () => {
    deleteLast();
    updateDisplay();
});

document.getElementById('percentBtn').addEventListener('click', () => {
    percent();
    updateDisplay();
});



window.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9')) {
        inputDigit(e.key);
        updateDisplay();
        return;
    }

    if (e.key === '.') {
        inputDot();
        updateDisplay();
        return;
    }

    if (e.key === 'backspace') {
        deleteLast();
        updateDisplay();
        return;
    }

    if (e.key === 'Escape') {
        clearAll();
        updateDisplay();
        return;
    }

    if (e.key === 'Enter' || e.key === '=') {
        compute();
        updateDisplay();
        return;
    }

    if (e.key === '+' || e.key === '-') {
        chooseOperation(e.key === '+' ? '+' : '-');
        updateDisplay();
        return;
    }

    if (e.key === '*') {
        chooseOperation('x');
        updateDisplay();
        return;
    }

    if (e.key === '/') {
        chooseOperation('÷');
        updateDisplay();
        return;
    }
});


const themBtn = document.getElementById('themeBtn');
let dark = true;
function applyTheme() {
    if (dark) {
        document.documentElement.classList.add('dark');
        themBtn.textContent = 'Light';
    } else {
        document.documentElement.classList.remove('dark');
        themBtn.textContent = 'Dark';
    }
}

themBtn.addEventListener('click', () => {
    dark = !dark;
    applyTheme();
});


clearAll();
updateDisplay();
applyTheme();


