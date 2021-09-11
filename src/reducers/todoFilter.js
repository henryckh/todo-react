import * as types from "../constants/ActionTypes";
import * as filters from "../constants/FilterTypes";

const todoFilter = (state = filters.FILTER_TODO_ALL, action) => {
  switch (action.type) {
    case types.SET_TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default todoFilter;
