import { ApiClient } from '../client.js';
import { Contact, CreateContactInput } from '../../types/models.js';
import { ApiResponse } from '../../types/api.js';
import { toApiContact, fromApiContact } from '../mappers/contactMapper.js';

export class ContactService {
    constructor(private client: ApiClient) { }

    async getAll(): Promise<ApiResponse<Contact[]>> {
        const res = await this.client.get<any[]>('/contacts/');
        return {
            ...res,
            data: res.data ? res.data.map(fromApiContact) : null,
        };
    }

    async create(input: CreateContactInput): Promise<ApiResponse<Contact>> {
        const res = await this.client.post<any, any>(
            '/contacts/',
            toApiContact(input)
        );

        return {
            ...res,
            data: res.data ? fromApiContact(res.data) : null,
        };
    }

    async toggleFavorite(id: number): Promise<ApiResponse<Contact>> {
        const res = await this.client.post<any, {}>(
            `/contacts/${id}/favorite/`,
            {}
        );

        return {
            ...res,
            data: res.data ? fromApiContact(res.data) : null,
        };
    }

    async search(query: string): Promise<ApiResponse<Contact[]>> {
        const res = await this.client.get<any[]>(
            `/contacts/?search=${encodeURIComponent(query)}`
        );

        return {
            ...res,
            data: res.data ? res.data.map(fromApiContact) : null,
        };
    }
}
