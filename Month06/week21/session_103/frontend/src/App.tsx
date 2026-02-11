import { useState } from 'react'
import './App.css'
import { ToggleHeart } from './components/ToggleHeart';
import { DummyFetch } from './components/DummyFetch';
import { CounterExercise } from './components/CounterExercise';
import { AddButton } from './components/EventsHandlingExercise';
import { ProductSearch } from './components/ControlledInputs';
import { CartList } from './components/ListAndKeys';

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');

  return (
    <>
      <h1>React Hooks - useState</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <hr />
      <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
      <h3>User email: {email}</h3>
      <ToggleHeart />
      <h2>Posts</h2>
      <DummyFetch />


      <hr />
      {/* exercises */}
      <CounterExercise />
      <hr />
      <AddButton productId={1} />
      <hr />
      <ProductSearch products={[]} />
      <hr />
      <CartList />
    </>
  )
}

export default App
