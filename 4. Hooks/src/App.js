import "./App.css";
import { useState } from "react";

function App() {
  // Ex 1
  const [count, setCount] = useState(0);

  // Ex 2
  const [textVisible, setVisibility] = useState(true);

  // Ex 3
  let [boxColor, setBoxColor] = useState("green");

  return (
    <div className="App">
      <section>
        <h1 className="exercise-title">Exercise 1</h1>
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
        <h1 className="exercise-title">Exercise 2</h1>
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

      <section>
        <h1 className="exercise-title">Exercise 3</h1>
        <div style={{ backgroundColor: boxColor }}>This is a box</div>
        <button
          onClick={() => {
            boxColor = boxColor === "green" ? "red" : "green";

            setBoxColor(boxColor);
          }}
        >
          Change Color
        </button>
      </section>
    </div>
  );
}

export default App;
