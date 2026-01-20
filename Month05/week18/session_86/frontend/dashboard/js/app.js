// js/app.js
import { renderUsers } from './components/users.js';
import { renderPosts } from './components/posts.js';
import { renderStats } from './components/stats.js';
import { setActiveNav } from './components/ui.js';

// Navigation handlers
document.getElementById('btn-users').addEventListener('click', () => {
    setActiveNav('btn-users');
    renderUsers();
});

document.getElementById('btn-posts').addEventListener('click', () => {
    setActiveNav('btn-posts');
    renderPosts();
});

document.getElementById('btn-stats').addEventListener('click', () => {
    setActiveNav('btn-stats');
    renderStats();
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
    renderUsers(e.target.value);
});


// Initial load
renderUsers();