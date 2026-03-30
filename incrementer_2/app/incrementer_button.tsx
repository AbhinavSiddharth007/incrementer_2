import { useState } from 'react';

export default function IncrementerButton() {
  const [counter, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const clear = () => setCount(0);

  return (
    <div>
      <h1>Incrementer Button</h1>
      <p data-testid="count">{counter}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={clear}>Reset</button>
    </div>
  );
}