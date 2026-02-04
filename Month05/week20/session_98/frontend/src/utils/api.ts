import type { Post, PostDetail, Category, PaginatedResponse, CommentFormData } from '@/types';

const API_BASE = '/api';

class ApiClient {
    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'API Error');
        }

        return response.json();
    }

    // Posts
    async getPosts(page = 1, category?: string): Promise<PaginatedResponse<Post>> {
        let url = `/posts/?page=${page}`;
        if (category) url += `&category=${category}`;
        return this.request<PaginatedResponse<Post>>(url);
    }

    async getPost(slug: string): Promise<PostDetail> {
        return this.request<PostDetail>(`/posts/${slug}/`);
    }

    async getFeaturedPosts(): Promise<Post[]> {
        return this.request<Post[]>('/posts/featured/');
    }

    async searchPosts(query: string): Promise<PaginatedResponse<Post>> {
        return this.request<PaginatedResponse<Post>>(`/posts/?search=${encodeURIComponent(query)}`);
    }

    // Categories
    async getCategories(): Promise<Category[]> {
        const response = await this.request<PaginatedResponse<Category>>('/categories/');
        return response.results;
    }

    // Comments
    async addComment(postSlug: string, data: CommentFormData): Promise<{ message: string }> {
        // CSRF token авах
        const csrfToken = this.getCsrfToken();

        return this.request(`/posts/${postSlug}/add_comment/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(data),
        });
    }

    private getCsrfToken(): string {
        const cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('csrftoken='));
        return cookie ? cookie.split('=')[1] : '';
    }
}

export const api = new ApiClient();
