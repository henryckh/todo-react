import { v4 as uuidv4 } from "uuid";
import * as types from "../constants/ActionTypes";
import TodoServices from "../services/todo.services";

export const fetchTodo = () => async (dispatch) => {
  try {
    let { data } = await TodoServices.getAllTodo();
    dispatch(addMultiTodo(data.slice(0, 10)));
  } catch (e) {
    // handle network error
    console.log("Cannot load data");
  }
};

export const addMultiTodo = (todos) => ({
  type: types.ADD_MULTI_TODO,
  data: todos.map((todo) => ({
    id: todo.id,
    text: todo.title,
  })),
});

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
