// src/index.ts
import { createUser, getAllUsers, getActiveUsers, updateUserStatus } from './services/userService.js';
import { createProduct, getProductsByCategory, getInStockProducts } from './services/productService.js';

console.log("=== Type-Safe Data Manager ===\n");

// Create Users
console.log("Creating users...");
createUser("Alice", "alice@example.com");
createUser("Bob", "bob@example.com", "pending");
createUser("Charlie", "charlie@example.com");

console.log("All users:", getAllUsers().map(u => u.name));
console.log("Active users:", getActiveUsers().map(u => u.name));

// Update user status
const users = getAllUsers();
if (users.length > 1) {
    updateUserStatus(users[1]!.id as number, "active");
    console.log("Updated Bob to active");
}

// Create Products
console.log("\nCreating products...");
createProduct("Laptop", 999.99, "electronics");
createProduct("T-Shirt", 29.99, "clothing");
createProduct("Mouse", 49.99, "electronics");

console.log("Electronics:", getProductsByCategory("electronics").map(p => p.name));
console.log("In stock:", getInStockProducts().map(p => p.name));

console.log("\n=== Done ===");