// Basic Types
export type ID = string | number;
export type Status = "active" | "inactive" | "pending";

// Entity Types
export type User = {
    id: ID;
    name: string;
    email: string;
    status: Status;
    createdAt: Date;
};

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
};

export type Order = {
    id: ID;
    userId: ID;
    products: OrderItem[];
    status: OrderStatus;
    total: number;
    createdAt: Date;
};

export type OrderItem = {
    productId: ID;
    quantity: number;
    price: number;
};

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

// API Response Types
export type ApiResponse<T> = {
    success: boolean;
    data: T | null;
    error: string | null;
};

export type PaginatedResponse<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
};