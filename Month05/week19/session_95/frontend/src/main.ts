import { ApiClient } from './api/client.js';
import { ContactService } from './api/services/contactServise.js';

// API client (Django REST API)
const api = new ApiClient('http://127.0.0.1:8000/api');

// Services
const contactService = new ContactService(api);

async function main() {
    console.log('--- CONTACT API TEST START ---');

    // Get all contacts
    const allContacts = await contactService.getAll();
    if (allContacts.success && allContacts.data) {
        console.log('All contacts:', allContacts.data);
    } else {
        console.error('Failed to load contacts:', allContacts.error);
    }

    // Create a new contact (camelCase only)
    const created = await contactService.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '99001122',
        notes: 'Created from TypeScript client',
    });

    if (created.success && created.data) {
        console.log(
            `Created contact: ${created.data.firstName} ${created.data.lastName}`
        );

        // Toggle favorite
        const toggled = await contactService.toggleFavorite(created.data.id);
        if (toggled.success && toggled.data) {
            console.log(
                `Favorite toggled: ${toggled.data.firstName} → ${toggled.data.isFavorite}`
            );
        }
    } else {
        console.error('Failed to create contact:', created.error);
    }

    // Search contacts
    const search = await contactService.search('john');
    if (search.success && search.data) {
        console.log(`Search result (${search.data.length}):`, search.data);
    }

    console.log('--- CONTACT API TEST END ---');
}

// Run
main().catch(err => {
    console.error('Unexpected error:', err);
});