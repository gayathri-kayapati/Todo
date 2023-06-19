import { useState } from "react";

export default function Todo({ todo, remove, update, toggleComplete }) {
  const [task, setTask] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {};

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // const handleRemove = (e) => {
  //   console.log(e.target.id);
  //   remove(e.target.id);
  // };

  return (
    <div>
      {isEditing ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} />
            <button>Save</button>
          </form>
        </div>
      ) : (
        <div key={todo.id}>
          <li style={{ textDecoration: "" }}>{todo.task}</li>
          <button onClick={toggleEditing}>Edit</button>
          <button onClick={remove(todo.id)}>Delet</button>
        </div>
      )}
    </div>
  );
}
