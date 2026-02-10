import React from 'react';

export type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductCardProps = {
    product: Product;
    onAdd: (productId: number) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onAdd(product.id)}>Add</button>
        </div>
    );
}


