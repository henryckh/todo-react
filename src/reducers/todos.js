import * as types from "../actions/Types";

const todo = (action) => {
  switch (action.type) {
    case types.ADD_TODO:
      // console.log(action);
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      console.log([...state, todo(action)]);
      return [...state, todo(action)];
    default:
      return state;
  }
};

export default todos;
