import React, { useState, useEffect } from "react";
import "./App.css";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

// UI and React update based on State
function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilteredTodos] = useState([]);

  // use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  // executes whenever we add new item to todos or change status of all, completed
  // we chanege the status in Form component

  const filterHandler = () => {
    //
    switch (status) {
      // switch depending on status from State
      case "completed":
        // if the status is completed, show only todos with completed parameter on true
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Functions
  return (
    <div className="App">
      <header>
        <h1>Todo app</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filterdTodos={filterdTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}
//

export default App;
