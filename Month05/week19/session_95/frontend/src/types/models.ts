// types/models.ts

// User types
export interface User {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
}

export interface CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    username?: string;
    email?: string;
    isActive?: boolean;
}

// Product types
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

export interface CreateProductInput {
    name: string;
    price: number;
    category: string;
}

// Contact types (matching Django model)
export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    categoryId?: number;
    notes?: string;
    isFavorite: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateContactInput {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    categoryId?: number;
    notes?: string;
}
