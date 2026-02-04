// API Response Types
export interface Post {
    id: number;
    title: string;
    slug: string;
    author_name: string;
    category_name: string;
    excerpt: string;
    featured_image: string;
    views: number;
    comment_count: number;
    created_at: string;
}

export interface PostDetail extends Post {
    content: string;
    category: Category;
    comments: Comment[];
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
}

export interface Comment {
    id: number;
    author_name: string;
    content: string;
    created_at: string;
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// Form Data Types
export interface CommentFormData {
    author_name: string;
    author_email: string;
    content: string;
}

// API Error
export interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
}
