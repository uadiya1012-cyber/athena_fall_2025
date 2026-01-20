// js/components/users.js
import { getUsers, getUserPosts } from '../api/client.js';
import { showLoading, showError, setContent } from './ui.js';
// Enhanced search functionality
import { filterByText, paginate } from '../utils/helpers.js';

// single source of truth for caching and pagination
let cachedUsers = [];
let currentPage = 1;
const PER_PAGE = 6;
let previousQuery = '';

export async function showUserPosts(userId) {
    showLoading();

    try {
        // reuse cached users if available
        const users = cachedUsers.length ? cachedUsers : await getUsers();
        cachedUsers = users;

        const posts = await getUserPosts(userId);
        const user = users.find(u => u.id === userId) || { name: 'Unknown' };

        const html = `
            <button onclick="window.renderUsers()" style="margin-bottom: 1rem; padding: 0.5rem 1rem; cursor: pointer;">
                ← Back to Users
            </button>
            <h2>${user.name}'s Posts (${posts.length})</h2>
            <div class="cards-grid">
                ${posts.map(post => `
                    <div class="card">
                        <h3>${post.title}</h3>
                        <p>${post.body.slice(0, 100)}...</p>
                    </div>
                `).join('')}
            </div>
        `;

        setContent(html);
    } catch (error) {
        showError(`Failed to load posts: ${error.message}`);
    }
}

export async function renderUsers(searchText = '') {
    showLoading();

    try {
        // if query changed, reset to first page
        if (searchText !== previousQuery) {
            currentPage = 1;
            previousQuery = searchText;
        }

        const users = cachedUsers.length ? cachedUsers : await getUsers();
        cachedUsers = users;

        const filtered = searchText
            ? filterByText(users, searchText, ['name', 'username', 'email'])
            : users;

        const paginated = paginate(filtered, currentPage, PER_PAGE);

        const html = `
      <h2>Users (${filtered.length})</h2>

      <div class="cards-grid">
        ${paginated.map(user => `
          <div class="card">
            <h3>${user.name}</h3>
            <p>@${user.username}</p>
            <p>${user.email}</p>
            <p class="meta">${user.company?.name || ''}</p>
            <button onclick="window.showUserPosts(${user.id})" style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer;">
                View Posts
            </button>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 2rem; text-align: center;">
        <button ${currentPage === 1 ? 'disabled' : ''} onclick="window.prevPage()">Prev</button>
        <span> Page ${currentPage} of ${Math.max(1, Math.ceil(filtered.length / PER_PAGE))} </span>
        <button ${currentPage * PER_PAGE >= filtered.length ? 'disabled' : ''} onclick="window.nextPage()">Next</button>
      </div>
    `;

        setContent(html);
    } catch (e) {
        showError(e.message);
    }
}

window.nextPage = () => {
    currentPage++;
    renderUsers(document.getElementById('search-input')?.value || '');
};

window.prevPage = () => {
    if (currentPage > 1) currentPage--;
    renderUsers(document.getElementById('search-input')?.value || '');
};

// Make available globally for onclick handlers
window.showUserPosts = showUserPosts;
window.renderUsers = renderUsers;