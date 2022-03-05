import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import { Wrapper, WrapperInput, Input, Label } from "./form-input.styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}
const FormInput: FC<FormInputProps> = React.forwardRef<
  HTMLInputElement,
  FormInputProps
>(({ children, label, id, onChange, ...otherProps }, ref) => {
  return (
    <Wrapper>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <WrapperInput>
        <Input onChange={onChange} id={id} {...otherProps} />
      </WrapperInput>
      {children ?? null}
    </Wrapper>
  );
});

export default FormInput;
