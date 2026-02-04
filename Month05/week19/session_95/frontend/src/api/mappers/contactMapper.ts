import { Contact, CreateContactInput } from '../../types/models.js';

export function toApiContact(input: CreateContactInput): any {
    return {
        first_name: input.firstName,
        last_name: input.lastName,
        email: input.email,
        phone: input.phone,
        category_id: input.categoryId,
        notes: input.notes,
    };
}

export function fromApiContact(raw: any): Contact {
    return {
        id: raw.id,
        firstName: raw.first_name,
        lastName: raw.last_name,
        email: raw.email,
        phone: raw.phone,
        categoryId: raw.category?.id,
        notes: raw.notes,
        isFavorite: raw.is_favorite,
        createdAt: new Date(raw.created_at),
        updatedAt: new Date(raw.updated_at),
    };
}