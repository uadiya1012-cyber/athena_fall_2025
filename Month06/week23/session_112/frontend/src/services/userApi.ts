import type { User } from '../types/User';

const API_URL = 'http://localhost:8000/api';

export const userApi = {
    async login(username: string): Promise<User> {
        const response = await fetch(`${API_URL}/login/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Login failed');
        }
        return response.json();
    },
    async getProfile(userId: number): Promise<User> {
        const response = await fetch(`${API_URL}/profile/${userId}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }
        return response.json();
    },
    async updateProfile(userId: number, data: Partial<User>): Promise<User> {
        const response = await fetch(`${API_URL}/profile/${userId}/update`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });
        if (!response.ok){
            throw new Error('Failed to update user profile');
        }
        return response.json();
    }
};
