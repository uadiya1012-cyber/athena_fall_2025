// src/types/task.ts
export interface Task {
    id: number;
    title: string;
    status: 'todo' | 'in_progress' | 'done';
    priority: number;
}