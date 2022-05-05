import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchTodo, deleteTodo } from "../../actions";

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTodo(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.todo) {
      return "Are you sure you want to delete this task?";
    }
    return `Are you sure you want to delete the task: ${this.props.todo.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Todo"
        actions={this.renderActions()}
        content={this.renderContent()}
        //onDismiss={() => history.push("/")}  Come back and fix***************
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(TodoDelete);
