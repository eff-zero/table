import { createSlice } from '@reduxjs/toolkit';

const initialState = { isVisible: false };

export const loaderReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showLouder: (state) => {
      state.isVisible = true;
    },
    hideLouder: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showLouder, hideLouder } = loaderReducer.actions;
export default loaderReducer.reducer;
