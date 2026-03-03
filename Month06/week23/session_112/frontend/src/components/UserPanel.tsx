import type { User } from '../types/User';

interface Props {
    user: User;
    onUpdateRole: (role: string) => void;
}

export function UserPanel({ user, onUpdateRole }: Props) {
    return (
        <div style={{ padding: '16px', background: '#f0fdf4', color: 'black', borderRadius: '8px' }}>
            <h3>Profile</h3>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <div>
                <label>Change Role:</label>
                <select
                    value={user.role}
                    onChange={(e) => onUpdateRole(e.target.value)}
                >
                    <option>Student</option>
                    <option>Instructor</option>
                    <option>Admin</option>

                </select>
            </div>
        </div>

    );
}