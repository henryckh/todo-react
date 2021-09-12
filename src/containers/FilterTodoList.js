import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, deleteTodo, fetchTodo } from "../actions";
import {
  FILTER_TODO_ALL,
  FILTER_TODO_ACTIVE,
  FILTER_TODO_COMPLETED,
} from "../constants/FilterTypes";

const FilterToList = connect(
  (state) => {
    let filteredTodos;
    switch (state.todoFilter) {
      case FILTER_TODO_ALL:
        filteredTodos = state.todos;
        break;
      case FILTER_TODO_COMPLETED:
        filteredTodos = state.todos.filter((t) => t.completed);
        break;
      case FILTER_TODO_ACTIVE:
        filteredTodos = state.todos.filter((t) => !t.completed);
        break;
      default:
        filteredTodos = state.todos;
    }

    return {
      todos: filteredTodos,
    };
  },
  (dispatch) => ({
    fetchTodo: () => dispatch(fetchTodo()),
    onTodoClick: (id) => dispatch(toggleTodo(id)),
    onDeleteClick: (id) => dispatch(deleteTodo(id)),
  })
)(TodoList);

export default FilterToList;
