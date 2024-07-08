import { useMemo, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Item from "./components/TodoItem";
import TodoList from "./components/TodoList";
import Select from "./components/Select";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Tilte from "./components/Tilte";

let id = 0;

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [filterType, setFilterType] = useState("ALL");

  const handlSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      handleCreate(text.trim());
    }
    setText("");
  };
  const handleCreate = (text) => {
    setList((pre) =>
      pre.concat({
        id: id++,
        text,
        completed: false,
      })
    );
  };
  const handleChange = (id) => {
    setList((pre) =>
      pre.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  };
  const handleChangeAll = (e) => {
    setList((pre) => pre.map((i) => ({ ...i, completed: e.target.checked })));
  };
  const handleDelete = (id) => {
    setList((pre) => pre.filter((i) => i.id !== id));
  };
  const handleDeleteCompleted = () => {
    setList((pre) => pre.filter((i) => !i.completed));
  };
  const handleUpdate = (id, newText) => {
    setList((pre) =>
      pre.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  const filteredList = list.filter((d) =>
    filterType === "ALL"
      ? d
      : filterType === "TO-DO"
      ? !d.completed
      : d.completed
  );
  return (
    <Layout>
      <Tilte>To-Do List 📝</Tilte>
      <Form
        onSubmit={handlSubmit}
        text={text}
        onChange={(e) => setText(e.target.value)}
        filterType={filterType}
        onChangeFilterType={(e) => setFilterType(e.target.value)}
      />
      <TodoList
        data={filteredList}
        onToggle={handleChange}
        onToggleAll={handleChangeAll}
        onDelete={handleDelete}
        onDeleteCompleted={handleDeleteCompleted}
        onUpdate={handleUpdate}
      />
    </Layout>
  );
}

export default App;
