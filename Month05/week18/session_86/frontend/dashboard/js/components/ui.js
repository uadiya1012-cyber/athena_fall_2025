// js/components/ui.js
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const contentEl = document.getElementById('content');

export function showLoading() {
    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    contentEl.innerHTML = '';
}

export function hideLoading() {
    loadingEl.classList.add('hidden');
}

export function showError(message) {
    hideLoading();
    errorEl.classList.remove('hidden');
    errorEl.textContent = message;
}

export function hideError() {
    errorEl.classList.add('hidden');
}

export function setContent(html) {
    hideLoading();
    hideError();
    contentEl.innerHTML = html;
}

export function setActiveNav(buttonId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}
