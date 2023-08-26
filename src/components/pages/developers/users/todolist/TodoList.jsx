// import React from "react";

const TodoList = ({ todos, checkTodoHandler, deleteTodoHandler }) => {
  return (
    <div className="todo__body">
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              onClick={() => checkTodoHandler(todo.id, !todo.completed)}
            >
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => checkTodoHandler(todo.id, e.target.checked)}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <p>{todo.title}</p>
                <div>
                  <button
                    onClick={() => deleteTodoHandler(todo.id)}
                    className="btn btn--alert"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
