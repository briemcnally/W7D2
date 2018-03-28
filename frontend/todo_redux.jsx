import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import {allTodos} from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={window.store} />, root);
});
