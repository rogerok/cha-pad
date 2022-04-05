import React, { FC } from "react";

//hooks
import useForm from "../../hooks/useForm.hook";

//utils
import { validateData } from "../../utils/validateData";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

//types
import { IValidateUserData } from "../../ts/types";

//components
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Title from "../title/title.component";

//styles
import { Spinner } from "../spinner/spinner.styles";

const SignUp = () => {
  const signUpWithEmailAndPassword = async (
    userData: IValidateUserData
  ): Promise<void> => {
    if (Object.values(userData).every(Boolean)) {
      const { displayName, email, password } = userData;

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(user);

        //@ts-ignore
        await createUserProfileDocument({
          ...user,
          displayName,
        });
      } catch (error: any) {
        console.log(error.message);
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
          onChange={handleChange}
          value={userData.displayName}
          required
        >
          {errors.displayNameError && <p>{errors.displayNameError}</p>}
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
          {errors.emailError && <p>{errors.emailError}</p>}
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
          {errors.passwordError && <p>{errors.passwordError}</p>}
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
          {errors.confirmPasswordError && <p>{errors.confirmPasswordError}</p>}
        </FormInput>
        <CustomButton>Зарегистрироваться</CustomButton>
      </form>
    </FormWrapper>
  );
};

export default SignUp;
