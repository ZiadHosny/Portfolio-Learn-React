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
      if (state > 0) {
        return (state -= 1);
      } else {
        return 0;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
