import { useState } from "react";
import { getProducts, addToCart } from "../api";

import type { Product } from "../types";

type Props = {
    onCartChange: () => void;
}

export default function ProductList({ onCartChange }: Props) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    const loadProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getProducts();
            setProducts(data.products);
            setLoaded(true);
        } catch (error: any) {
            setError(error.message || 'Failed to load products');
        } finally {
            setLoading(false);
        }
    }

    const handleAdd = async (productID: number) => {
        try {
            addToCart(productID);
            onCartChange();
        } catch (error) {
            console.error('Add failed', error);
            alert('Could not add to the cart');
        }
    }

    return (
        <div className="products">
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                    className="btn"
                    onClick={loadProducts}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : loaded ? 'Refresh products' : 'Load Products'}

                </button>

                {error && <div className="error">Error: {error}</div>}

                {loaded && products.length === 0 && (
                    <p style={{ color: '#666' }}>No products found.</p>
                )}

                <div className="grid">
                    {
                        products.map((p) => (
                            <div key={p.id} className="card">
                                <h3>{p.name}</h3>
                                <div>{p.price}</div>
                                <button
                                    className="btn add"
                                    onClick={() => handleAdd(p.id)}
                                    disabled={loading}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )


}