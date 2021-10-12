import { useState, useEffect } from "react";

const useForm = (validateData) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateData(userData));
    console.log(errors);
  };

  return { userData, handleChange, handleSubmit, errors };
};

export default useForm;
