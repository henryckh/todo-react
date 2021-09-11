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
    case types.ADD_MULTI_TODO:
      let temp = [];
      action.data.forEach((item) => {
        if (!state.find((item) => item.id))
          temp.push({ id: item.id, text: item.text, completed: false });
      });
      return [...state, ...temp];
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MULTI_TODO:
      return [...todo(state, action)];
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
