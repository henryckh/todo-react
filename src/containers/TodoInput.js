import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const TodoInputWrapper = styled.div`
  padding: 12px 0;
  form {
    display: flex;
    flex-grow: 1;
  }
  input {
    background: white;
    color: black;
    border: 1px solid white;
    ::placeholder {
      color: #bbb;
    }
  }
`;

const InputWrapper = styled.input`
  padding: 12px;
  flex-grow: 8;
`;

const AddButton = styled.button`
  flex-grow: 1;
  cursor: pointer;
  text-align: center;
  background: #e0e0e0;
  color: black;
  padding: 8px;
  border: none;
  border: 1px solid white;
  border-radius: 8px;
  margin: 0 8px;
  &:hover {
    background: white;
    color: black;
  }
`;

let TodoInput = ({ dispatch }) => {
  let input;

  return (
    <TodoInputWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <InputWrapper
          placeholder="Input your todos"
          ref={(node) => {
            input = node;
          }}
        />
        <AddButton type="submit">Add Todo</AddButton>
      </form>
    </TodoInputWrapper>
  );
};

export default connect()(TodoInput);
