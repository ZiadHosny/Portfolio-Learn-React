import { ADD_TODO, DELETE_FROM_TODO } from '../actionsType/todoActionTypes';

export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteFromTodoAction = (payload) => {
  return {
    type: DELETE_FROM_TODO,
    payload,
  };
};
