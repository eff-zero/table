import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: {}, isVisible: true };

export const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setDataToTable: (state, action) => {
      const { payload } = action;
      state.data = payload;
      state.isVisible = false;
    },
    backToForm: () => initialState,
  },
});

export const { setDataToTable, backToForm } = formReducer.actions;
export default formReducer.reducer;
