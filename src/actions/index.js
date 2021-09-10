import { v4 as uuidv4 } from "uuid";
import * as types from "./Types";

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  id: uuidv4(),
  text,
});
