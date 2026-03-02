// src/pages/Products.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function Products() {
  // Demo data (later will be fetched from API)
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/products/')
        .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch products');
            return res.json();
        })
        .then((data) => {
            setProducts(data.results ?? data); // Handle pagination if needed
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        })
            
    }, []);

    if (loading) return <p>Loading Products...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;