import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchTodo, editTodo } from "../../actions";
import TodoForm from "./TodoForm";

class TodoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <h3>Edit Task</h3>
          <TodoForm
            initialValues={_.pick(this.props.todo, "task", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit);
