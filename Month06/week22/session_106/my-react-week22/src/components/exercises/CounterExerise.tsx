import { useState } from 'react';
import SectionCard from '../common/SectionCard';

export default function CounterExercise() {
    const [count, setCount] = useState<number>(0);

    return (
        <SectionCard title="Exercise A: Counter">
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <button onClick={() => setCount(prev => prev - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </SectionCard>
    );
}