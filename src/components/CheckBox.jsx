import "./CheckBox.css";

const CheckBox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
