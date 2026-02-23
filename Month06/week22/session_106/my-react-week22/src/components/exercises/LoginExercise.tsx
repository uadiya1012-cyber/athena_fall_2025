// src/components/exercises/LoginExercise.tsx

import { useState } from 'react';
import type { FormEvent } from 'react';
import SectionCard from '../common/SectionCard';
import { setToken } from '../../api/auth';

export default function LoginExercise() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            setError('Username, password бөглөнө үү.');
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await fetch('http://localhost:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                throw new Error('Login амжилтгүй.');
            }

            const data = await res.json();
            setToken(data.token);

            alert('Login амжилттай!');
            setUsername('');
            setPassword('');
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <SectionCard title="Login (Token авах)">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </form>

            {error && <p style={{ color: 'crimson' }}>{error}</p>}
        </SectionCard>
    );
}