import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  background: #f0f0f0;
  height: 500px;
  overflow-y: scroll;
  padding-top: 8px;
  @media only screen and (max-width: 600px) {
    height: calc(100vh - 210px);
  }
`;

const TodoList = ({ todos, fetchTodo, onTodoClick, onDeleteClick }) => {
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onTodoClick={() => onTodoClick(todo.id)}
          onDeleteClick={() => onDeleteClick(todo.id)}
        />
      ))}
    </TodoListWrapper>
  );
};

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
