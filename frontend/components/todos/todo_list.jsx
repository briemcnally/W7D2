import React from 'react';
import TodoListContainer from "./todo_list_container";
import TodoListItem from "./todo_list_item";
import {allTodos} from '../../reducers/selectors';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    const listItems = this.props.todos.map((todo, idx) => (
      <TodoListItem key={todo.id} todo={todo} />
    ));
    return (
      <div className="list">
        <h1>
          All Todos
        </h1>
        <ul className='list-items'>
          {listItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }

}



export default TodoList;
