import { useState, useEffect, FormEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "./redux.hooks";
//selectors
import {
  selectUserLoading,
  signUpWithEmailAndPassword,
} from "../redux/user/userSlice";
//utils
import { validateData } from "../utils/validateData";
//types

import { IValidateUserData, IValidationErrors } from "../ts/types";

interface IuseForm {
  userData: IValidateUserData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  validationErrors: IValidationErrors;
}

const useSignInForm = (): IuseForm => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<IValidateUserData>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState<IValidationErrors>({
    displayNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationErrors(validateData(userData));
  };

  useEffect(() => {
    const signUp = async () => {
      if (
        !Object.values(validationErrors).every(Boolean) &&
        Object.values(userData).every(Boolean)
      ) {
        await dispatch(signUpWithEmailAndPassword(userData));
        setUserData({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    };
    /*       setSubmitting(false); */
    signUp();
  }, [validationErrors]);

  return {
    userData,
    handleChange,
    handleSubmit,
    validationErrors,
  };
};

export default useSignInForm;
