import React from "react";
import Header from "./Header";
import AddTodo from "../containers/TodoInput";
import FilterTodoList from "../containers/FilterTodoList";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import FilterTabs from "../containers/FilterTabs";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Quicksand", sans-serif;
    background: #555;
    margin: 8px;
  }
`;

const AppWrapper = styled.div`
  margin: 36px auto;
  padding: 24px 32px 36px 32px;
  max-width: 380px;
  min-height: 600px;
  background: #e0e0e0;
  border-radius: 12px;
  color: white;
  @media only screen and (max-width: 600px) {
    margin: 0px auto;
    padding: 24px 32px 24px 32px;
    min-height: unset;
  }
`;

const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <Header />
    <AddTodo />
    <FilterTabs />
    <FilterTodoList />
  </AppWrapper>
);

export default App;
