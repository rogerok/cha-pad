import React, { FC, InputHTMLAttributes } from "react";
import { CheckboxContainer } from "./checkbox.styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = ({ onChange, children, ...props }) => {
  return (
    <CheckboxContainer>
      {children ?? null}
      <input onChange={onChange} {...props} />
      <label htmlFor="would-taste" />
    </CheckboxContainer>
  );
};

export default React.memo(Checkbox);
