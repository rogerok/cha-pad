import { useState, useEffect } from "react";

const useForm = (validateData, signUpWithEmailAndPassword) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateData(userData));
    setSubmitting(true);
  };

  useEffect(() => {
    if (Object.entries(errors).length === 0 && isSubmitting) {
      signUpWithEmailAndPassword(userData);
      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setSubmitting(false);
    }
  }, [errors]);

  return { userData, handleChange, handleSubmit, errors, isSubmitting };
};

export default useForm;
