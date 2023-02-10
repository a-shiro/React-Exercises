import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="exercise-title">Exercise 1</h1>
      <div>
        <button
          className="universal-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          className="universal-btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="universal-btn"
          onClick={() => {
            setCount(0);
          }}
        >
          Set to Zero
        </button>
        <h1>{count}</h1>
      </div>
    </div>
  );
};
