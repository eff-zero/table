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
  const resetForm = () => setForm(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...form, [name]: value };
    setForm(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    dispatch(showLouder());
    setTimeout(() => dispatch(hideLouder()), 800);
  };

  return { handleChange, handleSubmit, form };
}

export default useForm;
