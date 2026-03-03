import type { User } from '../types/User';
import { UserPanel } from './UserPanel';

interface Props {
    user: User;
    onUpdateRole: (role: string) => void;
}

export function SideBar({ user, onUpdateRole }: Props) {
    return (
        <aside style={{
            width: '280px',
            padding: '16px',
             background: '#e0f2fe',
             color: '#1f2937',
             borderRadius: '8px',
        }}
        >
            <h2>Sidebar</h2>
            <nav style={{ marginBottom: '16px' }}>
                <p>Dashboard</p>
                <p>Courses</p>
                <p>Settings</p>
            </nav>
            <UserPanel user={user} onUpdateRole={onUpdateRole} />
        </aside>
    );
}