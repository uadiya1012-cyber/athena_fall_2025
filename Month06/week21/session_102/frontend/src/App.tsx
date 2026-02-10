import { useState } from 'react';
import ProductList from './components/ProductList';
import './index.css'

function App() {
  const [cartRefresh, setCartRefresh] = useState(0);

  const handleCartChange = () => {
    setCartRefresh((prev) => prev + 1);
  };

  return (
    <div className="app">
      <header>
        <h1>Mini Shop</h1>
      </header>
      <main>
        <ProductList onCartChange={handleCartChange} />
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
        Mini Shop Footer
      </footer>
    </div>
  )
}

export default App
