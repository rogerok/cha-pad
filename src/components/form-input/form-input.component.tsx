import React, { FC, InputHTMLAttributes } from "react";
import { Wrapper, WrapperInput, Input, Label } from "./form-input.styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  ref?: any;
}
const FormInput: FC<FormInputProps> = (
  { children, label, id, onChange, ...otherProps },
  ref
) => {
  return (
    <Wrapper>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <WrapperInput>
        <Input onChange={onChange} id={id} {...otherProps} />
      </WrapperInput>
      {children}
    </Wrapper>
  );
};

export default React.memo(FormInput);
