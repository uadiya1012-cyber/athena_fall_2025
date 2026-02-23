import React, { useState } from 'react';
import api from './api';

export const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await api.post('token/', {
            username,
            password
        });

        localStorage.setItem('token', response.data.token);
        onLogin();
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
