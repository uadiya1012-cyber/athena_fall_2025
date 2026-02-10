import { ProductCard } from "./ProductCard";
import type { Product } from "./ProductCard";

type ProductListProps = {
    products: Product[];
    onAdd: (productId: number) => void;
};

export function ProductList({ products, onAdd }: ProductListProps) {
    return (
        <section>
            <h2>Products</h2>
            <div>
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} onAdd={onAdd} />
                ))}
            </div>
        </section>
    );
}