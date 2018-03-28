import React from 'react';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';


class TodoForm extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       title: "",
       description: "",
     };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleTitleChange = this.handleTitleChange.bind(this);
     this.handleDescriptionChange = this.handleDescriptionChange.bind(this);


  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = Object.assign({}, this.state);
    newTodo.id = new Date().getTime();
    this.props.receiveTodo(newTodo);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title:
            <input type="text" onChange={this.handleTitleChange} value={this.state.title}></input>
          </label>
          <label>Description:
            <input type="text" onChange={this.handleDescriptionChange} value={this.state.description}></input>
          </label>
          <button>Create Step!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
