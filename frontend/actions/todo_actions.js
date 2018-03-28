import React from 'react';
import TodoAPI from '../util/todo_api_util';
// import {fetchTodos} from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => {
  return {
    type: 'RECEIVE_TODOS',
    todos: todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: 'RECEIVE_TODO',
    todo: todo
  };
};
  
export function fetchTodos() {
  return function (dispatch) {
    TodoAPI.fetchTodos().then(todos => {
      const action = receiveTodos(todos);
      dispatch(action);
      });
    }
  };
