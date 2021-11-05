import React from "react";
import { Wrapper, WrapperInput, Input, Label } from "./form-input.styles";

const FormInput = ({ children, label, id, handleChange, ...otherProps }) => {
  return (
    <Wrapper>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <WrapperInput>
        <Input onChange={handleChange} id={id} {...otherProps} />
      </WrapperInput>
      {children ?? null}
    </Wrapper>
  );
};

export default FormInput;
