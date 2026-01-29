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
});
