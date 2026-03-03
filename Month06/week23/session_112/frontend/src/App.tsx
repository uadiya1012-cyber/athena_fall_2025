import { useState } from 'react'
import type { User } from './types/User'
import { Page } from './components/Page'
import { userApi } from './services/userApi'
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const loggedInUser = await userApi.login(username);
      setUser(loggedInUser);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsername('');
  };

  const handleUpdateRole = async (role: string) => {
    if (!user) return;
    try {
      const updatedUser = await userApi.updateProfile(user.id, { role });
      setUser(updatedUser);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (!user){
    return (
      <div style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center'}}>
        <h1>Login</h1>
        <input type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p style={{ color: 'red', marginTop: '12px' }}>{error}</p>}
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '0 20px' }}>
      <Page user={user} onLogout={handleLogout} onUpdateRole={handleUpdateRole} />
    </div>
  );
}

export default App
