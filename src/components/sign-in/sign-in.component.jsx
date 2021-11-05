import React, { useState } from "react";

import { auth, signInWithGoogle } from "./../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInFormWrapper, CustomButtonsWrapper } from "./sign-in.styles";
import { Title } from "./sign-in.styles";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      setFormData({ email: "", password: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Title>У меня уже есть аккаунт</Title>
        <FormInput
          name="email"
          type="email"
          label="Введите адрес почты"
          required
          id={"sign-in-email"}
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Введите пароль"
          required
          id={"sign-in-name"}
          handleChange={handleChange}
        />
        <CustomButtonsWrapper>
          <CustomButton type="submit">Войти</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleButton>
            Войти с Google
          </CustomButton>
        </CustomButtonsWrapper>
      </form>
    </FormWrapper>
  );
};

export default SignIn;
