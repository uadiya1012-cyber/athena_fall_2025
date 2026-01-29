// src/services/userService.ts
import { User, Status, ApiResponse } from '../types';
import { userStore } from '../store';

export function createUser(
    name: string,
    email: string,
    status: Status = "active"
): ApiResponse<User> {
    const user: User = {
        id: Date.now(),
        name,
        email,
        status,
        createdAt: new Date()
    };

    userStore.add(user);

    return {
        success: true,
        data: user,
        error: null
    };
}

export function getUserById(id: number): ApiResponse<User> {
    const user = userStore.get(id);

    if (user) {
        return { success: true, data: user, error: null };
    }

    return { success: false, data: null, error: "User not found" };
}

export function getAllUsers(): User[] {
    return userStore.getAll();
}

export function getActiveUsers(): User[] {
    return userStore.filter(user => user.status === "active");
}

export function updateUserStatus(id: number, status: Status): ApiResponse<User> {
    const updated = userStore.update(id, { status });

    if (updated) {
        return { success: true, data: updated, error: null };
    }

    return { success: false, data: null, error: "User not found" };
}