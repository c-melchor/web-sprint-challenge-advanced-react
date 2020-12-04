// write your custom hook here to control your checkout form
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedVals, setStoredVals] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  return [storedVals, setStoredVals];
};

const useForm = formValues => {
  const [values, setValues] = useLocalStorage("form", formValues);

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return [values, onChange];
};

export default useForm;
