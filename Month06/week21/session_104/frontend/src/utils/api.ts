const API_BASE_URL = 'http://localhost:8000';

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

export async function initializeCSRF(): Promise<void> {
    try {
        await fetch(`${API_BASE_URL}/api/csrf/`, {
            method: 'GET',
            credentials: 'include',
        });
    } catch (error) {
        console.error('Error initializing CSRF:', error);

    }
}

export async function apiGet(path: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}

// Make a POST request to the API with CSRF protection

export async function apiPost(path: string, body: unknown): Promise<any> {
    const csrfToken = getCookie('csrftoken');
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...(csrfToken ? { 'X-CSRFToken': csrfToken } : {}),
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}