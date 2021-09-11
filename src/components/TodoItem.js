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

const TodoWrappper = styled.div`
  display: flex;
  margin: 8px 16px;
  padding: 16px;
  align-items: center;
  background: #cfcfcf;
  color: black;
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Todo = ({ text, completed, onClick }) => (
  <TodoWrappper completed={completed} onClick={onClick}>
    <Checkbox checked={completed} onChange={(e) => {}} />
    {text}
  </TodoWrappper>
);

Todo.prototype = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
