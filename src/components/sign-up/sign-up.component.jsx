import React from "react";

import CustomButton from "./../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import SpinnerComponent from "../spinner/spinner.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";

import useForm from "../../hooks/useForm.hook";
import { validateData } from "../../utils/validateData";

import { Title } from "./sign-up.styles";
import {
  auth,
  createUserProfileDocument,
} from "./../../firebase/firebase.utils";
import { Spinner } from "../spinner/spinner.styles";

const SignUp = () => {
  const signUpWithEmailAndPassword = async (userData) => {
    if (Object.values(userData).every(Boolean)) {
      const { displayName, email, password } = userData;

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(user);

        await createUserProfileDocument({
          ...user,
          displayName,
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const { userData, handleChange, handleSubmit, errors, isSubmitting } =
    useForm(validateData, signUpWithEmailAndPassword);

  return isSubmitting ? (
    <Spinner />
  ) : (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Title>Зарегистрироваться</Title>
        <FormInput
          name="displayName"
          type="text"
          label="Ваше имя"
          id={"sign-up-name"}
          handleChange={handleChange}
          value={userData.displayName}
          required
        >
          {errors.displayName && <p>{errors.displayName}</p>}
        </FormInput>
        <FormInput
          name="email"
          type="email"
          label="Ваша почта"
          id={"sign-up-email"}
          handleChange={handleChange}
          value={userData.email}
          required
        >
          {errors.email && <p>{errors.email}</p>}
        </FormInput>
        <FormInput
          name="password"
          type="password"
          label="Ваш пароль"
          id={"sign-up-password"}
          handleChange={handleChange}
          value={userData.password}
          required
        >
          {errors.password && <p>{errors.password}</p>}
        </FormInput>
        <FormInput
          name="confirmPassword"
          type="password"
          label="Повторите пароль"
          id={"sign-up-password-confirm"}
          handleChange={handleChange}
          value={userData.confirmPassword}
          required
        >
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </FormInput>
        <CustomButton>Зарегистрироваться</CustomButton>
      </form>
    </FormWrapper>
  );
};

export default SignUp;
