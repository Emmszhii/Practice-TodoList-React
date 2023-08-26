// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Todo from "./components/pages/developers/users/todolist/Todo";
import SystemLogin from "./components/pages/access/developer/SystemLogin";

function App() {
  // const [newItem, setNewItem] = useState("");
  // const [todos, setTodos] = useState(lists);

  // const changeInputHandler = (e) => setNewItem(e.target.value);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTodos((currentTodo) => {
  //     return [
  //       ...currentTodo,
  //       { id: crypto.randomUUID(), title: newItem, completed: false },
  //     ];
  //   });
  //   setNewItem("");
  // };

  // const toggleTodo = (id, completed) => {
  //   setTodos((currentTodo) => {
  //     return currentTodo.map((todo) => {
  //       return todo.id === id ? { ...todo, completed } : todo;
  //     });
  //   });
  // };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
          {/* <Route path="/login" element={<SystemLogin />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
