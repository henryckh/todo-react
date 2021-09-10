import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, onClick }) => <div onClick={onClick}>{text}</div>;

Todo.prototype = {
  text: PropTypes.string.isRequired,
};

export default Todo;
