import { useRef } from "react";

type Props = {
    productId: number;
};

export function AddButton({ productId }: Props) {
    const timeoutRef = useRef<number | null>(null);

    function onAdd(id: number) {
        console.log("Added");
        console.log("Product ID:", id);
    }

    function handleClick() {
        if (timeoutRef.current !== null) return; // debounce guard

        onAdd(productId);

        timeoutRef.current = window.setTimeout(() => {
            timeoutRef.current = null;
        }, 500);
    }

    return (
        <>
            <h2>Event Handling Exercise</h2>
            <button onClick={handleClick}>
                Add
            </button>
        </>
    );
}

