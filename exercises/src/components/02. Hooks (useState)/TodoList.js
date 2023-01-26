import { useState } from "react";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState({});

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList.length + 1,
      taskName: newTask,
      completed: false,
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const task = todoList.filter((task) => task.id === id)[0];
    task.completed = true;

    setTodoList([...todoList]);
  };

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={addTask}>Add</button>
      <div>
        <ul>
          {todoList.map((task) => (
            <TaskList
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const TaskList = (props) => {
  return (
    <div>
      <li style={{ color: props.completed ? "green" : "black" }}>
        {props.taskName}
      </li>
      <button
        onClick={() => {
          props.completeTask(props.id);
        }}
      >
        Complete
      </button>
      <button
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        X
      </button>
    </div>
  );
};
