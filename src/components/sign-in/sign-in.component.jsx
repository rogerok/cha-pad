import React, { useState } from "react";

import { signInWithGoogle } from "./../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInFormWrapper, CustomButtonsWrapper } from "./sign-in.styles";
import { Title } from "./sign-in.styles";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <SignInFormWrapper>
      <form>
        <Title>У меня уже есть аккаунт</Title>
        <FormInput
          name="email"
          type="email"
          label="Введите адрес почты"
          required
          handleChange={handleChange}
          id={"sign-in-email"}
        />
        <FormInput
          name="password"
          type="password"
          label="Введите пароль"
          required
          handleChange={handleChange}
          id={"sign-in-name"}
        />
        <CustomButtonsWrapper>
          <CustomButton>Войти</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleButton>
            Войти с Google
          </CustomButton>
        </CustomButtonsWrapper>
      </form>
    </SignInFormWrapper>
  );
};

export default SignIn;
