import { useState } from "react";

type CartItem = {
    id: number;
    name: string;
    qty: number;
};

export function CartList() {
    const [items, setItems] = useState<CartItem[]>([
        { id: 1, name: "Apple", qty: 2 },
        { id: 2, name: "Banana", qty: 1 },
        { id: 3, name: "Orange", qty: 3 },
    ]);

    const increase = (id: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decrease = (id: number) => {
        setItems((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

    return (
        <div>
            <h2>Cart</h2>

            <p>Total quantity: {totalQty}</p>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} (qty: {item.qty})
                        <button onClick={() => increase(item.id)}>+</button>
                        <button onClick={() => decrease(item.id)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
