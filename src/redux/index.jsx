import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counterSlice';
import todo from './features/todoSlice';
import shop from './features/productsSlice';

export const Store = configureStore({
  reducer: { counter, todo, shop },
});
