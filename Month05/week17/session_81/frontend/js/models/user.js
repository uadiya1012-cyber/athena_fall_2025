// models/user.js
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }

    getInfo() {
        return `${this.name} (${this.email})`;
    }

    toJSON() {
        return {
            name: this.name,
            email: this.email,
            createdAt: this.createdAt.toISOString()
        };
    }
}

export function createUser(name, email) {
    return new User(name, email);
}

export default User;
