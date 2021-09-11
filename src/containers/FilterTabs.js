import { connect } from "react-redux";
import Tabs from "../components/Tabs";
import { setTodoFilter } from "../actions";

export default connect(
  (state) => ({
    todoFilter: state.todoFilter,
  }),
  (dispatch) => ({
    setTodoFilter: (filter) => dispatch(setTodoFilter(filter)),
  })
)(Tabs);
