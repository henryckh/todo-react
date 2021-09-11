import { combineReducers } from "redux";
import todos from "./todos";
import todoFilter from "./todoFilter";

const todoApp = combineReducers({
  todos,
  todoFilter,
});

export default todoApp;
