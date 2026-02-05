import type { Task, TaskInput } from './types';

const API_BASE = 'http://localhost:8000/api';

// Get all tasks
export async function fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${API_BASE}/tasks/`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Task[] = await response.json();
    return data;
}

// Create a new task
export async function createTask(input: TaskInput): Promise<Task> {
    const response = await fetch(`${API_BASE}/tasks/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
    });
    if (!response.ok) {
        const errors = await response.json();
        throw new Error(JSON.stringify(errors));
    }
    const data: Task = await response.json();
    return data;
}

// Delete a task
export async function deleteTask(id: number): Promise<void> {
    const response = await fetch(`${API_BASE}/tasks/${id}/`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Task %{taskId} is not deleted!`);
    }
}

// Update a task
export async function updateTask(id: number, input: TaskInput): Promise<Task> {
    const response = await fetch(`${API_BASE}/tasks/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
    });
    if (!response.ok) {
        const errors = await response.json();
        throw new Error(JSON.stringify(errors));
    }
    const task: Task = await response.json();
    return task;
}