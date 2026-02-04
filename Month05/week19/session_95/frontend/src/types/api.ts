// types/api.ts

// API Response wrapper
export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    error: string | null;
    timestamp: Date;
}

// Pagination
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

// Request options
export interface RequestOptions {
    headers?: Record<string, string>;
    timeout?: number;
    retries?: number;
}

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';


