import { useState } from 'react';

const initialState = {
  base: '',
  interestRate: '',
  capitalPayment: '',
};

function useForm() {
  const [form, setForm] = useState(initialState);

  const resetForm = () => setForm(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...form, [name]: value };
    setForm(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  return { handleChange, handleSubmit, form };
}

export default useForm;
