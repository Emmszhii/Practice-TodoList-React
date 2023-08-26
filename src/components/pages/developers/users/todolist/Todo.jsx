import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import lists from "../../../../../lists";

const Todo = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState(lists);

  // get user input
  const setTodoHandler = (e) => setItem(e.target.value);
  // on submit update the lists
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    setTodos((currentItem) => [
      ...currentItem,
      { id: crypto.randomUUID(), title: item, completed: false },
    ]);
    setItem("");
  };
  // toggle todo input
  const checkTodoHandler = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      );
    });
  };
  // delete todo in the list
  const deleteTodoHandler = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todolist">
      <div className="todolist__wrapper">
        <div className="todo__header">
          <h1 className="text-center font-bold text-2xl">Todo List</h1>
          <TodoForm
            setTodoHandler={setTodoHandler}
            todoSubmitHandler={todoSubmitHandler}
            item={item}
          />
          <TodoList
            checkTodoHandler={checkTodoHandler}
            todos={todos}
            deleteTodoHandler={deleteTodoHandler}
          />
        </div>

        <div className="todo__footer ">
          <p className="text-sm text-end my-5">©Emms</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
