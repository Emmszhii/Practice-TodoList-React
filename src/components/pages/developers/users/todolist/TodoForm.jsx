// import React from "react";

const TodoForm = ({ item, setTodoHandler, todoSubmitHandler }) => {
  return (
    <>
      <form
        className="flex items-center gap-2 justify-between"
        onSubmit={todoSubmitHandler}
      >
        <div className="form__wrap">
          <label htmlFor="todo" name="todo">
            Enter Todo
          </label>
          <input
            type="text"
            id="todo"
            placeholder="Type your Todo's"
            value={item}
            onChange={setTodoHandler}
          />
        </div>
        <div className="form__action">
          <button className="btn btn--primary hover:!text-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
