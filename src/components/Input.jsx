import "./Input.css";

const Input = ({ value, onChange }) => {
  return (
    <input
      className="input"
      name="todo"
      placeholder="add your task"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
