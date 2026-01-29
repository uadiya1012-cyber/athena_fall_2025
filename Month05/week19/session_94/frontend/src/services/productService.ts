// src/services/productService.ts
import { Product, ApiResponse } from '../types';
import { productStore } from '../store';

export function createProduct(
    name: string,
    price: number,
    category: string
): ApiResponse<Product> {
    const product: Product = {
        id: Date.now(),
        name,
        price,
        category,
        inStock: true
    };

    productStore.add(product);

    return { success: true, data: product, error: null };
}

export function getProductsByCategory(category: string): Product[] {
    return productStore.filter(p => p.category === category);
}

export function getInStockProducts(): Product[] {
    return productStore.filter(p => p.inStock);
}

export function updateStock(id: number, inStock: boolean): ApiResponse<Product> {
    const updated = productStore.update(id, { inStock });

    if (updated) {
        return { success: true, data: updated, error: null };
    }

    return { success: false, data: null, error: "Product not found" };
}