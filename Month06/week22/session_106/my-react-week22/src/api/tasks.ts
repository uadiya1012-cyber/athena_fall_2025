export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface Task {
    id: number;
    title: string;
    status: 'todo' | 'in_progress' | 'done';
    created_at?: string;
    priority?: number;
}

const BASE_URL = 'http://localhost:8000/api/tasks/';

export async function fetchTasksPaginated(params: string): Promise<PaginatedResponse<Task>> {
    const token = localStorage.getItem('token') ?? '';
    const response = await fetch(`${BASE_URL}?${params}`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return (await response.json()) as PaginatedResponse<Task>;
}

export async function createTask(task: Omit<Task, 'id' | 'created_at'>): Promise<Task> {
    const token = localStorage.getItem('token') ?? '';
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error(`Failed to create task: ${res.status}`);
    return res.json();
}


