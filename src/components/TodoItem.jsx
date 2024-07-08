import { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import "./TodoItem.css";
import Input from "./Input";

const TodoItem = ({ id, completed, text, onToggle, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    onUpdate(id, newText);
    setEdit(false);
  };
  return (
    <div className={["todo-item", completed && "active"].join(" ")}>
      <CheckBox checked={completed} onChange={() => onToggle(id)} />
      {edit ? (
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <p className="text">{text}</p>
      )}
      {edit ? (
        <button className="todo-button" onClick={handleSave}>
          💾
        </button>
      ) : (
        <button className="todo-button" onClick={() => setEdit((pre) => !pre)}>
          ✏️
        </button>
      )}
      <button className="todo-button" onClick={() => onDelete(id)}>
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
