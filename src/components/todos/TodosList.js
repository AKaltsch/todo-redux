import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startSubmit } from "redux-form";
import { fetchTodos } from "../../actions";

class TodosList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderAdmin(todo) {
    if (startSubmit.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/create" className="ui primary button">
            Create Todo
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          <i className="large middle aligned icon clock" />
          <div className="content">{todo.task}</div>
          <div className="description">{todo.description}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodosList);
