import React, { FC, InputHTMLAttributes } from "react";

import { SelectContainer, SelectOption } from "./select.styles";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: {
    gradeValue: string;
    gradeName: string;
  }[];
  label: string;
}

const Select: FC<SelectProps> = ({
  options,
  id,
  label,
  onChange,
  ...otherProps
}) => {
  return (
    <React.Fragment>
      {label ? <label htmlFor={id}>{label}</label> : null}

      <SelectContainer onChange={onChange} {...otherProps}>
        <SelectOption label="Пожалуйста выберите сорт чая"></SelectOption>
        <SelectOption value="withoutGrade">Без сорта</SelectOption>
        {options.map((option) => (
          <SelectOption value={option.gradeValue} key={option.gradeValue}>
            {option.gradeName}
          </SelectOption>
        ))}
      </SelectContainer>
    </React.Fragment>
  );
};
export default Select;