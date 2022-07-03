import { createSlice } from '@reduxjs/toolkit';

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

const todoSlice = createSlice({
  initialState,
  name: 'Todo',
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    deleteFromTodo: (state, { payload }) => {
      state.todos.splice(payload, 1);
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteFromTodo } = todoSlice.actions;
