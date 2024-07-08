import "./Select.css";

const Select = ({ value, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      <option value="ALL">ALL</option>
      <option value="TO-DO">TO-DO</option>
      <option value="COMPLETED">COMPLETED</option>
    </select>
  );
};

export default Select;
