import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })``;

const TodoWrappper = styled.div`
  margin: 8px 16px;
  padding: 16px;
  justify-content: space-between;
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
};

export default Todo;
