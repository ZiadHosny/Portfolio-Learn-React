import { combineReducers } from 'redux';
import { todoReducer } from './todoReducers';
import { counterReducer } from './counterReducer';

export const reducers = combineReducers({
  todoReducer,
  counterReducer,
});
