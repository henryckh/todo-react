import React from "react";
import Header from "./Header";
import AddTodo from "../containers/TodoInput";
import TodoListPage from "../containers/TodoListPage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import FilterTabs from "../containers/FilterTabs";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Quicksand", sans-serif;
  }
`;

const AppWrapper = styled.div`
  margin: 36px auto;
  padding: 24px 32px 36px 32px;
  max-width: 380px;
  min-height: 600px;
  background: #007c91;
  border-radius: 12px;
  color: white;
`;

const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <Header />
    <AddTodo />
    <FilterTabs />
    <TodoListPage />
  </AppWrapper>
);

export default App;
