import React from 'react';
import { RECEIVE_TODO } from '../actions/todo_actions.js';
import { RECEIVE_TODOS } from '../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      let todo = action.todo;
      let nextState = merge({}, state);
      nextState[todo.id] = todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
