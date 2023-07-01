import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import loaderReducer from './features/louderSlice';
import formReducer from './features/formSlice';

export const store = configureStore({
  reducer: {
    modal: loaderReducer,
    form: formReducer,
  },
});

export const useLoaderState = () => useSelector((state) => state.modal);
export const useFormState = () => useSelector((state) => state.form);
