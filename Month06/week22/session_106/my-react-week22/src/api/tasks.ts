// src/api/tasks.ts
import type { Task } from '../types/task';
import { getToken } from './auth';

const BASE_URL = 'http://localhost:8000/api/tasks/';

export async function fetchTasks(params?: string): Promise<Task[]> {
    const token = getToken();
    const url = params ? `${BASE_URL}?${params}` : BASE_URL;

    const response = await fetch(url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return (await response.json()) as Task[];
}