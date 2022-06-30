import { ADD_TODO, DELETE_FROM_TODO } from '../actionsType/todoActionTypes';

const initialState = {
  todos: [
    {
      title: 'learn node js',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'go to the sea',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'walk the dog',
      content: 'Lorem ipsum dolor sit amet.',
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_FROM_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((_, i) => {
            console.log(i, action.payload);
            return i !== action.payload;
          }),
        ],
      };
    default:
      return state;
  }
};
