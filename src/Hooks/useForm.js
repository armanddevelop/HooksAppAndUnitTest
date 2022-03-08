import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const resetField = () => {
    setFormState(initialState);
  };
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return {
    formState,
    handleInputChange,
    resetField,
  };
};
