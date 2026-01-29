class DataStore {
    constructor() {
        this.items = new Map();
    }
    add(item) {
        this.items.set(item.id, item);
        return item;
    }
    get(id) {
        return this.items.get(id);
    }
    getAll() {
        return Array.from(this.items.values());
    }
    update(id, updates) {
        const item = this.items.get(id);
        if (item) {
            const updated = Object.assign(Object.assign({}, item), updates);
            this.items.set(id, updated);
            return updated;
        }
        return undefined;
    }
    delete(id) {
        return this.items.delete(id);
    }
    filter(predicate) {
        return this.getAll().filter(predicate);
    }
    count() {
        return this.items.size;
    }
}
// Create stores
export const userStore = new DataStore();
export const productStore = new DataStore();
export const orderStore = new DataStore();
//# sourceMappingURL=store.js.map
