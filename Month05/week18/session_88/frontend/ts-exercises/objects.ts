type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function displayUser(user: User): void {
    console.log(`${user.name} (${user.email})`);
}

const user1: User = {
    id: 1,
    name: 'Adiya',
    email: 'Adiya@example.com',
    isActive: true,
};