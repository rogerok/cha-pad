import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInAndSignUpSection } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpSection>
      <SignIn />
      <SignUp />
    </SignInAndSignUpSection>
  );
};

export default SignInAndSignUpPage;
