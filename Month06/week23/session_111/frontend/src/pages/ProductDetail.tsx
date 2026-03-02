import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  in_stock: boolean;
  created_at: string;
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return null;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {product.in_stock ? "In Stock" : "Out of Stock"}
      </p>

      <p>{product.description}</p>

      <br />
      <Link to="/products">← Back to Products</Link>
    </div>
  );
}

export default ProductDetail; 