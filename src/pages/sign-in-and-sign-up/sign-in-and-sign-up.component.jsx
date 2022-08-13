import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.hooks";

import {
  selectCurrentUser,
  selectUserLoading,
} from "../../redux/user/userSlice";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import SpinnerComponent from "../../components/spinner/spinner.component";
import WrapperComponent from "./../../components/wrapper/wrapper.component";
import Title from "../../components/title/title.component";
import { SignInAndSignUpSection } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoading = useAppSelector(selectUserLoading);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && location.state?.from.pathname) {
      navigate(location.state.from.pathname);
    }
    if (location.state === null && currentUser) navigate("/");
  }, [currentUser, location, navigate]);

  return isLoading ? (
    <SpinnerComponent style={{ margin: "auto" }} />
  ) : (
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
