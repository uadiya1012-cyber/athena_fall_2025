// js/api/client.js
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function get(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}

// Localstorage Caching Wrapper
async function cacheFetch(key, fetchFn) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            return JSON.parse(cached);
        }
    } catch (e) {
        // If localStorage is not available or parse fails, fall back to network
        console.warn('LocalStorage unavailable or corrupt for key', key);
    }

    const data = await fetchFn();
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        // ignore quota errors
    }
    return data;
}

export function getUsers() {
    return cacheFetch('users', () => get('/users'));
}

export function getPosts() {
    return cacheFetch('posts', () => get('/posts'));
}

export function getComments() {
    return cacheFetch('comments', () => get('/comments'));
}

export function getUserPosts(userId) {
    return cacheFetch(`posts_user_${userId}`, () => get(`/posts?userId=${userId}`));
}

export function getPostComments(postId) {
    return cacheFetch(`comments_post_${postId}`, () => get(`/comments?postId=${postId}`));
}

export default { get, getUsers, getPosts, getComments, getUserPosts, getPostComments };
