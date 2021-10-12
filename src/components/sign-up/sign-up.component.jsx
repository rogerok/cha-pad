import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { SignUpFormWrapper, Title } from "./sign-up.styles";
import useForm from "../../hooks/useForm.hook";
import { validateData } from "../../utils/validateData";

const SignUp = () => {
  const { userData, handleChange, handleSubmit, errors } =
    useForm(validateData);

  return (
    <SignUpFormWrapper>
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
        <CustomButton></CustomButton>
      </form>
    </SignUpFormWrapper>
  );
};

export default SignUp;
