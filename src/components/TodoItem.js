import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  height: 25px;
  min-width: 25px;
  text-align: left;
  display: block;
  border: 1.5px solid #bbbbbb;
  border-radius: 6px;
  background-color: #e7e6e7;
  margin-right: 15px;
  &:checked {
    background-color: #ff0000;
  }
  &:focus {
    outline: none !important;
  }
`;

const DeleteButton = styled.div`
  cursor: pointer;
  align-items: flex-end;
  align-self: flex-end;
  padding: 12px 16px;
`;

const TodoText = styled.div`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TodoWrappper = styled.div`
  display: flex;
  margin: 8px 16px;
  padding: 16px;
  align-items: center;
  background: #cfcfcf;
  color: black;
  cursor: pointer;
`;

const Todo = ({ text, completed, onTodoClick, onDeleteClick }) => (
  <TodoWrappper onClick={onTodoClick}>
    <Checkbox checked={completed} onChange={(e) => {}} />
    <TodoText completed={completed}>{text}</TodoText>
    <DeleteButton onClick={onDeleteClick}>&times;</DeleteButton>
  </TodoWrappper>
);

Todo.prototype = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
