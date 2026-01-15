// api.js
const API_URL = 'https://api.example.com';

export const get = async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    return response.json();
};

export const post = async (endpoint, data) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return response.json();
};

// Default export
const api = { get, post, API_URL };
export default api;