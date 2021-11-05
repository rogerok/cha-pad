import React from "react";
import { FormWrapperContainer } from "./form-wrapper.styles";

const FormWrapper = ({ children, wide }) => {
  return (
    <FormWrapperContainer wide={wide ?? ""}>{children}</FormWrapperContainer>
  );
};
export default FormWrapper;
