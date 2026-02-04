// api/client.ts
import { ApiResponse, RequestOptions, HttpMethod } from "../types/api.js";

export class ApiClient {
    private baseUrl: string;
    private defaultHeaders: Record<string, string>;
    private timeout: number;

    constructor(baseUrl: string, options?: RequestOptions) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...options?.headers
        };
        this.timeout = options?.timeout ?? 10000;
    }

    // Generic request method
    private async request<T>(
        method: HttpMethod,
        endpoint: string,
        data?: unknown,
        options?: RequestOptions
    ): Promise<ApiResponse<T>> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = { ...this.defaultHeaders, ...options?.headers };

        try {
            const response = await fetch(url, {
                method,
                headers,
                body: data ? JSON.stringify(data) : undefined
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();

            return {
                success: true,
                data: result as T,
                error: null,
                timestamp: new Date()
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                error: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date()
            };
        }
    }

    // HTTP method shortcuts
    async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>('GET', endpoint, undefined, options);
    }

    async post<T, D>(endpoint: string, data: D, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>('POST', endpoint, data, options);
    }

    async put<T, D>(endpoint: string, data: D, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>('PUT', endpoint, data, options);
    }

    async patch<T, D>(endpoint: string, data: D, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>('PATCH', endpoint, data, options);
    }

    async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>('DELETE', endpoint, undefined, options);
    }
}
