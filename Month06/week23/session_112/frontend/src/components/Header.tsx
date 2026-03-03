import type { User } from '../types/User';
import { UserGreeting } from './UserGreeting';

interface Props {
    user: User;
    onLogout: () => void;
}


export function Header({ user, onLogout }: Props) {
    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px',
                background: '#1f2937',
                color: 'white',
                borderRadius: '8px',
            }}
        >
            <h1 style={{ fontSize: '20px', margin: 0 }}>My App</h1>
            <UserGreeting user={user} onLogout={onLogout} />

        </header>
    )
}