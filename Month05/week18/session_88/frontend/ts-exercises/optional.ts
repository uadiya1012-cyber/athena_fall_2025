function greet(name: string, greeting?: string): string {
    return `${greeting ?? "Hello"}, ${name}`;
}

function createUser(
    name: string,
    age?: number,
    email?: string
): object {
    return {
        name,
        age,
        email,
    };
}

