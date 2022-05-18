import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reduce";
import TodoForm from "./Component/TodoForm";
import Todo from "./Component/Todo";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []); // default empty array
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container >
        <h1> Todo App with Context API</h1>
        <Todo />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
