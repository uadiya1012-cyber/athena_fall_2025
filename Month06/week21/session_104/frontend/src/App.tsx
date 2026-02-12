import './index.css'
import { initializeCSRF, apiGet } from './utils/api'

function App() {

  const handleInitCSRF = async () => {
    await initializeCSRF();
    const status = document.getElementById('csrf-status');
    if (status) {
      status.textContent = 'CSRF initialized';
    }
  };

  const testMiddleware = async () => {
    const button = document.getElementById('test-btn') as HTMLButtonElement;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    if (!button || !resultDiv || !errorDiv) return;

    button.disabled = true;
    button.textContent = 'Loading...';
    errorDiv.textContent = '';
    resultDiv.textContent = '';

    try {
      const data = await apiGet('/api/test');
      resultDiv.innerHTML = `
        <h3>Response:</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
        <p><small>Check browser DevTools Network tab for X-Requested-Duration and x-Requested-Id headers</small></p>
      `;


    } catch (error) {
      errorDiv.textContent = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;

    } finally {
      button.disabled = false;
      button.textContent = 'Test Middleware';
    }
  }


  return (
    <div style={{ padding: '2em', fontFamily: 'system-ui' }}>
      <h1>Django + Docker + React</h1>
      <p>Middleware and CORS Test</p>
      <div style={{ marginBottom: '1em' }}>
        <button
          onClick={handleInitCSRF}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            marginRight: '0.5rem',
            cursor: 'pointer',
          }}
        >
          Initialize CSRF
        </button>
        <span id="csrf-status"></span>

        <button
          id='test-btn'
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
          onClick={testMiddleware}
        >
          Test Middleware
        </button>

        <div id='error' style={{ color: 'red', marginTop: '1rem' }}></div>
        <div
          id='result'
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f0f0f0'
          }}
        ></div>

      </div>

    </div>
  );

}
export default App
