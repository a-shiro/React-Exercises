import { User } from "./components/User";
import { Job } from "./components/Job";
import { AgeRestricted } from "./components/AgeRestricted";
import { Planets } from "./components/Planets";
import { useState } from "react";

import "./App.css";

function App() {
  // useState Hook
  const [count, setCount] = useState(0);
  const [textVisible, setVisibility] = useState(true);
  // -----------------------------------

  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      <section>
        <h1 className="exercise-title">Exercise 1</h1>
        <div>
          <User name="Shiro" age={21} email="shiro@gmail.com" />
          <Job salary={90000} position="Junior Front-End" company="Google" />
        </div>
      </section>

      <section>
        <h1 className="exercise-title">Exercise 2</h1>
        <div>
          <AgeRestricted />
        </div>
      </section>

      <section>
        <h1 className="exercise-title">Exercise 3</h1>
        <div>
          <Planets />
        </div>
      </section>

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
