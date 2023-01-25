import "./App.css";
import { useState } from "react";

function App() {
  // Ex 1
  const [count, setCount] = useState(0);

  // Ex 2
  const [textVisible, setVisibility] = useState(true);

  // Ex 3
  const [boxColor, setBoxColor] = useState("green");

  // Ex 4 - Todo List
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState({});

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList.length + 1,
      taskName: newTask,
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    console.log(id);
    setTodoList(todoList.filter((task) => task.id !== id));
  };

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
            setBoxColor(boxColor === "green" ? "red" : "green");
          }}
        >
          Change Color
        </button>
      </section>

      <section>
        <h1 className="exercise-title">Exercise 4</h1>
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add</button>
        <div>
          <ul>
            {todoList.map((task) => (
              <div>
                <li>{task.taskName}</li>
                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
