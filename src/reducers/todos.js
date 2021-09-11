import * as types from "../constants/ActionTypes";

const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        completed: !state.completed,
      };
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, todo(null, action)];
    case types.TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === action.id) {
          return todo(item, action);
        }
        return item;
      });
    default:
      return state;
  }
};

export default todos;
