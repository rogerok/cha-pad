import React, { FC } from "react";
import { FormWrapperContainer } from "./form-wrapper.styles";

interface FormWrapperProps {
  wide?: boolean;
}

const FormWrapper: FC<FormWrapperProps> = ({ children, wide }) => {
  return (
    <FormWrapperContainer wide={wide || ""}>{children}</FormWrapperContainer>
  );
};
export default FormWrapper;
