import React from "react";
import Header from "./Header";
import AddTodo from "../containers/TodoInput";
import TodoListPage from "../containers/TodoListPage";

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <TodoListPage />
  </div>
);

export default App;
