const API = "http://localhost:8000/api";

function getCookie(name: string) {
    const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? decodeURIComponent(match[2]) : null;
}

export async function apiGet<T>(path: string): Promise<T> {
    const res = await fetch(`${API}${path}`, {
        credentials: "include",
    });
    return res.json();
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
    const csrftoken = getCookie("csrftoken");

    const res = await fetch(`${API}${path}`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(csrftoken ? { "X-CSRFToken": csrftoken } : {}),
        },
        body: JSON.stringify(body),
    });

    return res.json();
}

await apiGet("/csrf/");