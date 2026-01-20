// js/components/stats.js
import { getUsers, getPosts, getComments } from '../api/client.js';
import { showLoading, showError, setContent } from './ui.js';

export async function renderStats() {
    showLoading();

    try {
        const [users, posts, comments] = await Promise.all([
            getUsers(),
            getPosts(),
            getComments()
        ]);

        const html = `
            <h2>Dashboard Statistics</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="number">${users.length}</div>
                    <div class="label">Total Users</div>
                </div>
                <div class="stat-card">
                    <div class="number">${posts.length}</div>
                    <div class="label">Total Posts</div>
                </div>
                <div class="stat-card">
                    <div class="number">${comments.length}</div>
                    <div class="label">Total Comments</div>
                </div>
                <div class="stat-card">
                    <div class="number">${(posts.length / users.length).toFixed(1)}</div>
                    <div class="label">Avg Posts/User</div>
                </div>
                <div class="stat-card">
                    <div class="number">${(comments.length / posts.length).toFixed(1)}</div>
                    <div class="label">Avg Comments/Post</div>
                </div>
            </div>
        `;

        setContent(html);
    } catch (error) {
        showError(`Failed to load statistics: ${error.message}`);
    }
}