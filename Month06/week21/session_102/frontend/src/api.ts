import type { CartData, Product } from './types';
const API_BASE = 'http://localhost:8000';

async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        }
    });

    if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        throw new Error(errorText || `HTTP ${response.status}`)
    }

    return response.json() as Promise<T>;
}

export const getProducts = () => apiFetch<{ products: Product[] }>('/products/');
export const getCarts = () => apiFetch<CartData>('cart/');
export const addToCart = (productId: number) => {
    apiFetch<CartData>('cart/add/', {
        method: 'POST',
        body: JSON.stringify({ productId })
    });
};

export const removeFromCart = (productId: number) => {
    apiFetch<CartData>('cart/remove/', {
        method: 'POST',
        body: JSON.stringify({ productId })
    });
};

export const clearCart = () => apiFetch<CartData>('cart/clear/', { method: 'POST' });