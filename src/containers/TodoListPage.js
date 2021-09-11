import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, fetchTodo } from "../actions";
import {
  FILTER_TODO_ALL,
  FILTER_TODO_ACTIVE,
  FILTER_TODO_COMPLETED,
} from "../constants/FilterTypes";

const TodoListPage = connect(
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
    }

    return {
      todos: filteredTodos,
    };
  },
  (dispatch) => ({
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    fetchTodo: () => dispatch(fetchTodo()),
  })
)(TodoList);

export default TodoListPage;
