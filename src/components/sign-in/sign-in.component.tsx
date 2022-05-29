import React, { FC, useState } from "react";

import { useAppDispatch } from "../../hooks/redux.hooks";
import { signInWithEmailAndPassword } from "../../redux/user/userSlice";

//utils
import { signInWithGoogle } from "../../firebase/firebase.utils";

//components
import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import CustomButton from "../custom-button/custom-button.component";
import Title from "../../components/title/title.component";

//styles
import { CustomButtonsWrapper } from "./sign-in.styles";

interface FormData {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void | null> => {
    e.preventDefault();
    dispatch(signInWithEmailAndPassword(formData));
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
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Введите пароль"
          required
          id={"sign-in-name"}
          onChange={handleChange}
        />
        <CustomButtonsWrapper>
          <CustomButton primary type="submit">
            Войти
          </CustomButton>
          <CustomButton
            primary
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
            isGoogleButton
          >
            Войти с Google
          </CustomButton>
        </CustomButtonsWrapper>
      </form>
    </FormWrapper>
  );
};

export default SignIn;
