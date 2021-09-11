import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  background: #f0f0f0;
  height: 500px;
  overflow-y: scroll;
  padding-top: 12px;
`;

const TodoList = ({ todos, onTodoClick }) => (
  <TodoListWrapper>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </TodoListWrapper>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
