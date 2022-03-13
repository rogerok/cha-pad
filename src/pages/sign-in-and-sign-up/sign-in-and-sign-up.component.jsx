import React, { useEffect } from "react";

import { selectCurrentUser } from "../../redux/user/userSlice";
import { useAppSelector } from "../../hooks/redux.hooks";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpSection } from "./sign-in-and-sign-up.styles";
import WrapperComponent from "./../../components/wrapper/wrapper.component";
import { useLocation, useNavigate } from "react-router-dom";

const SignInAndSignUpPage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  useEffect(() => {
    if (currentUser && location.state?.from.pathname)
      navigate(location.state.from.pathname);
    if (location.state === null && currentUser) navigate("/");
  }, [currentUser]);

  return (
    <WrapperComponent>
      <SignInAndSignUpSection>
        <SignIn />
        <SignUp />
      </SignInAndSignUpSection>
    </WrapperComponent>
  );
};

export default SignInAndSignUpPage;
