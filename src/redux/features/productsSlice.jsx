import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = createAsyncThunk('Shop/getProducts', () => {
  return fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));
});

const initialState = {
  products: [],
  loading: false,
  error: {},
};

const shopSlice = createSlice({
  initialState,
  name: 'Shop',
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default shopSlice.reducer;
