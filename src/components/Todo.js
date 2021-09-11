import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TodoWrappper = styled.div`
  display: flex;
  margin: 8px 16px;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  background: #26c6da;
  color: black;
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Todo = ({ text, completed, onClick }) => (
  <TodoWrappper completed={completed} onClick={onClick}>
    {text}
  </TodoWrappper>
);

Todo.prototype = {
  text: PropTypes.string.isRequired,
};

export default Todo;
