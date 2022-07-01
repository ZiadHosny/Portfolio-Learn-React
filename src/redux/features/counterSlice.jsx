import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterSlice = createSlice({
  initialState,
  name: 'Counter',
  reducers: {
    increment: (state) => {
      return (state += 1);
    },
    decrement: (state) => {
      return (state -= 1);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
