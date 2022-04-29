import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../../actions";
import TodoForm from "./TodoForm";

class TodoCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Todo</h3>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createTodo })(TodoCreate);
