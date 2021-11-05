import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpSection } from "./sign-in-and-sign-up.styles";
import WrapperComponent from "./../../components/wrapper/wrapper.component";

const SignInAndSignUpPage = () => {
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
