import Button from "./Button";
import CheckBox from "./CheckBox";
import Item from "./TodoItem";
import "./TodoList.css";

const TodoList = ({
  data,
  onToggle,
  onToggleAll,
  onDelete,
  onDeleteCompleted,
  onUpdate,
}) => {
  const leftCount = data.filter((d) => !d.completed).length;
  return (
    <div className="todo-list">
      <div className="todo-header">
        <CheckBox
          checked={!!data.length && data.every((d) => d.completed)}
          onChange={onToggleAll}
        />
        <div className="text">Task ({leftCount} items left)</div>
        <Button onClick={onDeleteCompleted}>CLEAR COMPLETED</Button>
      </div>
      <div className="todo-body">
        {data.map((d) => (
          <Item
            {...d}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
