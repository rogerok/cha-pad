import React, { useEffect } from "react";

import { selectCurrentUser } from "../../redux/user/userSlice";
import { useAppSelector } from "../../hooks/redux.hooks";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpSection } from "./sign-in-and-sign-up.styles";
import WrapperComponent from "./../../components/wrapper/wrapper.component";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../components/title/title.component";

const SignInAndSignUpPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && location.state?.from.pathname)
      navigate(location.state.from.pathname);
    if (location.state === null && currentUser) navigate("/");
  }, [currentUser]);

  return (
    <WrapperComponent>
      <Title>Войдите или зарегистрируйтесь</Title>
      <SignInAndSignUpSection>
        <SignIn />
        <SignUp />
      </SignInAndSignUpSection>
    </WrapperComponent>
  );
};

export default SignInAndSignUpPage;
