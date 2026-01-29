// Зөвхөн light Dark mode-г ажиллуулах хэсэг 
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
        }
    };

    // theme from localStorage
    const saved = localStorage.getItem('theme');
    applyTheme(saved || 'light');

    if (toggle) {
        toggle.addEventListener('click', function () {
            const current = body.classList.contains('theme-dark') ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            applyTheme(next);
        });
    }

    // Show the Add button only when there's text in the todo input
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');

    const updateAddBtn = () => {
        if (!todoInput || !addBtn) return;
        const hasText = todoInput.value.trim().length > 0;
        if (hasText) {
            addBtn.classList.add('visible');
        } else {
            addBtn.classList.remove('visible');
        }
    };

    // initialize visibility on load
    updateAddBtn();

    if (todoInput) {
        todoInput.addEventListener('input', updateAddBtn);
    }
});
