import React from 'react';
import configureStore from '../store/store.js';

const allTodos = ( state ) => (
	Object.keys(state.todos).map(id => state.todos[id])
);

export {allTodos};
