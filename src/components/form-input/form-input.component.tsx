import React, { FC, InputHTMLAttributes } from "react";
import { Wrapper, WrapperInput, Input, Label } from "./form-input.styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  /*   onChange: (e: React.ChangeEvent) => void;
  required?: boolean; */
}

const FormInput: FC<FormInputProps> = ({
  children,
  label,
  id,
  onChange,
  ...otherProps
}) => {
  return (
    <Wrapper>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <WrapperInput>
        <Input onChange={onChange} id={id} {...otherProps} />
      </WrapperInput>
      {children ?? null}
    </Wrapper>
  );
};

export default FormInput;
