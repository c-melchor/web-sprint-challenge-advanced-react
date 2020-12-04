// write your custom hook here to control your checkout form
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedVals, setStoredVals] = useState(() => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : initialValue;
  });

  const setValue = value => {
    setStoredVals(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedVals, setValue];
};

const useForm = formValues => {
  const [values, setValues] = useLocalStorage("form", formValues);

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return [setValues, values, onChange];
};

export default useForm;
