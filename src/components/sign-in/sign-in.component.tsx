import React, { FC, useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import CustomButton from "../custom-button/custom-button.component";

import { CustomButtonsWrapper } from "./sign-in.styles";
import { Title } from "./sign-in.styles";

interface FormData {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  /*   const fromPage = location.state?.from?.pathname || "/";
  const location = useLocation();
  const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);
  const googleSignIn = async () => {
    try {
      await signInWithGoogle().additionalUserInfo?.profile;
      setIsLogged(true);
    } catch (err) {
      console.log(err);
    }
  if (isLogged) navigate("/");
    setIsLogged(false);
  };
 */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void | null> => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      setFormData({ email: "", password: "" });
      /*       setIsLogged(true); */
    } catch (err: any) {
      alert(err.message);
    }
    /*     if (isLogged) navigate("/");
    setIsLogged(false); */
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
          <CustomButton type="submit">Войти</CustomButton>
          <CustomButton
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
