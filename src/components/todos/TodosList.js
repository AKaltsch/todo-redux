import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../../actions";

class TodosList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderAdmin(todo) {
    if (todo.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/todos/edit/${todo.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/todos/delete/${todo.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/todos/create" className="ui primary button">
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
          {this.renderAdmin(todo)}
          <i className="large middle aligned icon clock" />
          <div className="content">{todo.task}</div>
          <div className="description">{todo.description}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
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
