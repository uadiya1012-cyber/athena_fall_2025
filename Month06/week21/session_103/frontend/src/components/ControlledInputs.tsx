import { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

type Props = {
    products: Product[];
};

export function ProductSearch({ products }: Props) {
    const [q, setQ] = useState("");

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(q.toLowerCase())
    );

    return (
        <div>
            <h2>Search Products</h2>

            <input
                type="text"
                placeholder="Search by name..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />

            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
