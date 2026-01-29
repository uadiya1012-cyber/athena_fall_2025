// src/store.ts
import { ID, User, Product, Order } from './types';

class DataStore<T extends { id: ID }> {
    private items: Map<ID, T> = new Map();

    add(item: T): T {
        this.items.set(item.id, item);
        return item;
    }

    get(id: ID): T | undefined {
        return this.items.get(id);
    }

    getAll(): T[] {
        return Array.from(this.items.values());
    }

    update(id: ID, updates: Partial<T>): T | undefined {
        const item = this.items.get(id);
        if (item) {
            const updated = { ...item, ...updates };
            this.items.set(id, updated);
            return updated;
        }
        return undefined;
    }

    delete(id: ID): boolean {
        return this.items.delete(id);
    }

    filter(predicate: (item: T) => boolean): T[] {
        return this.getAll().filter(predicate);
    }

    count(): number {
        return this.items.size;
    }
}

// Create stores
export const userStore = new DataStore<User>();
export const productStore = new DataStore<Product>();
export const orderStore = new DataStore<Order>();