import React from "react";

const Form = (props) => {
  const inputTexTHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const sumbitTodoHandler = (e) => {
    e.preventDefault();

    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTexTHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i className="far fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
