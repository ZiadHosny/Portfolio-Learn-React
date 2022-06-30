import { createStore } from 'redux';
import { todoReducer } from './reducers/todoReducers';

export const Store = createStore(todoReducer);
