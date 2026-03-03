import type { User } from '../types/User';
import { Header } from './Header';
import { SideBar } from './SideBar';

interface Props {
    user: User;
    onLogout: () => void;
    onUpdateRole: (role: string) => void;
}

export function Page({ user, onLogout, onUpdateRole }: Props) {
    return (
        <div>
            <Header user={user} onLogout={onLogout} />
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <SideBar user={user} onUpdateRole={onUpdateRole} />
                <main style={{
                    flex: 1,
                    padding: '16px'}}>
                    <h2>Welcome to the Dashboard</h2>
                    <p>This is the main content area. Here you can see your courses, progress, and more.</p>
                </main>
            </div>
        </div>
    );
}