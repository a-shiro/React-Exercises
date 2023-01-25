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
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    console.log(id);
    setTodoList(todoList.filter((task) => task.id !== id));
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
              deleteTask={deleteTask}
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
      <li>{props.taskName}</li>
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
