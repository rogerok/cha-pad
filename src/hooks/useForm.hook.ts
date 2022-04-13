import { IValidateUserData, IValidationErrors } from "./../ts/types";
import { useState, useEffect } from "react";

const useForm = (
  validateData: (userData: IValidateUserData) => IValidationErrors,
  signUpWithEmailAndPassword: (userData: IValidateUserData) => void
) => {
  const [userData, setUserData] = useState<IValidateUserData>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<IValidationErrors>({
    displayNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
