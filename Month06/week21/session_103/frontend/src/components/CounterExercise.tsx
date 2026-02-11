import { useState } from "react";

export function CounterExercise() {
  // number state
  const [count, setCount] = useState<number>(0);

  // boolean state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIncrease = () => {
    setCount((c) => c + 1);
  };

  const handleDecrease = () => {
    // guard: 0-оос доош оруулахгүй
    setCount((c) => (c > 0 ? c - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <h2>Counter Exercise</h2>

      <p>Count: {count}</p>

      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleToggle}>
        {isOpen ? "Close" : "Open"}
      </button>

      {isOpen && <p>🎉 Toggle ажиллаж байна!</p>}
    </div>
  );
}
