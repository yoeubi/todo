import Button from "./Button";
import "./Form.css";
import Input from "./Input";
import Select from "./Select";

const Form = ({ onSubmit, text, onChange, filterType, onChangeFilterType }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <Input value={text} onChange={(e) => onChange(e.target.value)} />
      <Button onClick={onSubmit}>ADD</Button>
      <Select
        value={filterType}
        onChange={(e) => onChangeFilterType(e.target.value)}
      />
    </form>
  );
};

export default Form;
