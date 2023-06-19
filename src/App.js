import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./styles.css";
import Todo from "./Todo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: uuid(), task: "task1", completed: false },
    { id: uuid(), task: "task2", completed: true }
  ]);

  const remove = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const update = (id, updatedtask) => {
    const updatedTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedtask };
      }
      return todo;
    });
    setTodos(updatedTask);
  };
  const toggleComplete = (id) => {
    const updatedTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTask);
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            remove={remove}
            update={update}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
