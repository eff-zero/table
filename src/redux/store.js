import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './features/louderSlice';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    modal: loaderReducer,
  },
});

export const useLoaderState = () => useSelector((state) => state.modal);
