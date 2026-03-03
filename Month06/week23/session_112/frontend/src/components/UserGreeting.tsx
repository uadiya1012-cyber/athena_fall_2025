import type { User } from '../types/User';

interface Props {
    user: User;
    onLogout: () => void;
}

export function UserGreeting({ user, onLogout}: Props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div>
                <strong>{user.username}</strong>
                <span style={{ marginLeft: '8px', color: '#6b7280', fontSize: '14px' }}>
                    {user.role}
                </span>
            </div>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}