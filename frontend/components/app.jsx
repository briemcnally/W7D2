import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';
// import TodoList from './todos/todo_list.jsx';


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
