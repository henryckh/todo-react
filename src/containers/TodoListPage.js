import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const TodoListPage = connect(mapStateToProps)(TodoList);

export default TodoListPage;
