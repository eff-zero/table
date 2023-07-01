import { setDataToTable } from '@/redux/features/formSlice';
import { showLouder, hideLouder } from '@/redux/features/louderSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const initialState = {
  base: '',
  interestRate: '',
  capitalPayment: '',
};

function useForm() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const resetForm = () => setForm(initialState);

  const setLoader = () => {
    dispatch(showLouder());
    setTimeout(() => dispatch(hideLouder()), 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...form, [name]: value };
    setForm(values);
  };

  const loadTable = () => dispatch(setDataToTable(form));

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    loadTable();
    setLoader();
  };

  return { handleChange, handleSubmit, form };
}

export default useForm;
