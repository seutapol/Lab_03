import { useState } from "react";

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const updateValue = (newValue) => {
    setCount(newValue);
    setHistory((prev) => [...prev, newValue]);
    setOperationCount((prev) => prev + 1);
  };
  const increment = () => {
    updateValue(count + step);
  };
  const decrement = () => {
    updateValue(count - step);
  };
  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: "2px solid black", padding: 10, margin: 10 }}>
      <h2>Count: {count}</h2>
      <p>Total operations: {operationCount}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h4>Last values:</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
