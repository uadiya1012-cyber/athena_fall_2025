// js/components/posts.js
import { getPosts, getUsers } from '../api/client.js';
import { showLoading, showError, setContent } from './ui.js';

export async function renderPosts() {
    showLoading();

    try {
        const [posts, users] = await Promise.all([
            getPosts(),
            getUsers()
        ]);

        // Create user map for lookup
        const userMap = {};
        users.forEach(user => {
            userMap[user.id] = user;
        });

        const html = `
            <h2>Posts (${posts.length})</h2>
            <div class="cards-grid">
                ${posts.slice(0, 20).map(post => `
                    <div class="card">
                        <h3>${post.title}</h3>
                        <p>${post.body.slice(0, 100)}...</p>
                        <p class="meta">By ${userMap[post.userId]?.name || 'Unknown'}</p>
                    </div>
                `).join('')}
            </div>
        `;

        setContent(html);
    } catch (error) {
        showError(`Failed to load posts: ${error.message}`);
    }
}