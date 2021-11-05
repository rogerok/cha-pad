import React from "react";

import { SelectContainer, SelectOption } from "./select.styles";

const Select = ({ options, id, label, ...otherProps }) => {
  return (
    <React.Fragment>
      {label ? <label htmlFor={id}>{label}</label> : null}

      <SelectContainer>
        {options.map((option) => (
          <SelectOption vale={option.gradeValue}>
            {option.gradeName}
          </SelectOption>
        ))}
      </SelectContainer>
    </React.Fragment>
  );
};
export default Select;
