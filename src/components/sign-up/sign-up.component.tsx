import React from "react";

//hooks
import useForm from "../../hooks/useSignUpForm.hook";

//components
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Title from "../title/title.component";

const SignUp = () => {
  const { userData, handleChange, handleSubmit, validationErrors } = useForm();

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Title>Зарегистрироваться</Title>
        <FormInput
          name="displayName"
          type="text"
          label="Ваше имя"
          id={"sign-up-name"}
          onChange={handleChange}
          value={userData.displayName}
          required
        >
          {validationErrors.displayNameError && (
            <p>{validationErrors.displayNameError}</p>
          )}
        </FormInput>
        <FormInput
          name="email"
          type="email"
          label="Ваша почта"
          id={"sign-up-email"}
          onChange={handleChange}
          value={userData.email}
          required
        >
          {validationErrors.emailError && <p>{validationErrors.emailError}</p>}
        </FormInput>
        <FormInput
          name="password"
          type="password"
          label="Ваш пароль"
          id={"sign-up-password"}
          onChange={handleChange}
          value={userData.password}
          required
        >
          {validationErrors.passwordError && (
            <p>{validationErrors.passwordError}</p>
          )}
        </FormInput>
        <FormInput
          name="confirmPassword"
          type="password"
          label="Повторите пароль"
          id={"sign-up-password-confirm"}
          onChange={handleChange}
          value={userData.confirmPassword}
          required
        >
          {validationErrors.confirmPasswordError && (
            <p>{validationErrors.confirmPasswordError}</p>
          )}
        </FormInput>
        <CustomButton primary>Зарегистрироваться</CustomButton>
      </form>
    </FormWrapper>
  );
};

export default SignUp;
