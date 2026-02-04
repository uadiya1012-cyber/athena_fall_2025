// api/services/userService.ts
import { ApiClient } from "../client.js";
import { User, CreateUserInput, UpdateUserInput } from '../../types/models.js';
import { ApiResponse } from "../../types/api.js";

export class UserService {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    async getAll(): Promise<ApiResponse<User[]>> {
        return this.client.get<User[]>('/users');
    }

    async getById(id: number): Promise<ApiResponse<User>> {
        return this.client.get<User>(`/users/${id}`);
    }

    async create(input: CreateUserInput): Promise<ApiResponse<User>> {
        return this.client.post<User, CreateUserInput>('/users', input);
    }

    async update(id: number, input: UpdateUserInput): Promise<ApiResponse<User>> {
        return this.client.patch<User, UpdateUserInput>(`/users/${id}`, input);
    }

    async delete(id: number): Promise<ApiResponse<void>> {
        return this.client.delete<void>(`/users/${id}`);
    }
}


