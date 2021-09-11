import { v4 as uuidv4 } from "uuid";
import * as types from "../constants/ActionTypes";

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  id: uuidv4(),
  text,
});

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id,
});

export const setTodoFilter = (filter) => ({
  type: types.SET_TODO_FILTER,
  filter,
});
