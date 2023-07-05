import { validateForm } from '@/helper/validateForm';
import { setDataToTable } from '@/redux/features/formSlice';
import { showLouder, hideLouder } from '@/redux/features/louderSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const initialState = {
  base: '',
  interestRate: '',
  capitalPayment: '',
};

const initialError = { isInvalid: true };

function useForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialError);
  const dispatch = useDispatch();

  const resetForm = () => setForm(initialState);
  const resetErrors = () => setErrors(initialError);

  const setLoader = () => {
    dispatch(showLouder());
    setTimeout(() => dispatch(hideLouder()), 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...form, [name]: value };

    setErrors(validateForm(values));
    setForm(values);
  };

  const loadTable = () => dispatch(setDataToTable(form));

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    resetErrors();
    loadTable();
    setLoader();
  };

  return { handleChange, handleSubmit, errors, form };
}

export default useForm;
