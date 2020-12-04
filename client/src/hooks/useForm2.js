import { useState } from "react";

const useLocalStorage = (key, initialValues) => {
  const [storedVal, setStoredVal] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValues));
      return initialValues;
    }
  });

  const newVals = value => {
    setStoredVal(value);
    localStorage.setItem(key, value);
  };
  return [storedVal, newVals];
};

const useForm2 = formFields => {
  const [values, setValues] = useLocalStorage("form", formFields);

  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues(initialValues);
    setShowSuccessMessage(true);
  };

  return [handleSubmit, values, handleChanges];
};

export default useForm2;
