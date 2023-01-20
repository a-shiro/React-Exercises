import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [textVisible, setVisibility] = useState(true);

  return (
    <div className="App">
      <section>
        <h1 className="exercise-title">Exercise 4</h1>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrease
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Set to Zero
          </button>
          <h1>{count}</h1>
        </div>
      </section>

      <section>
        <h1 className="exercise-title">Exercise 5</h1>
        <div>
          <p style={{ display: textVisible ? "block" : "none" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            nam vitae, consequuntur provident laudantium aperiam dolore eos
            aspernatur placeat doloremque.
          </p>
          <button
            onClick={() => {
              setVisibility(!textVisible);
            }}
          >
            Toggle Text
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
