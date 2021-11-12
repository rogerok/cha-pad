import React from "react";

import { SelectContainer, SelectOption } from "./select.styles";

const Select = ({ options, id, label, handleChange, ...otherProps }) => {
  return (
    <React.Fragment>
      {label ? <label htmlFor={id}>{label}</label> : null}

      <SelectContainer onChange={handleChange} {...otherProps}>
        {options.map((option) => (
          <SelectOption value={option.gradeValue}>
            {option.gradeName}
          </SelectOption>
        ))}
      </SelectContainer>
    </React.Fragment>
  );
};
export default Select;
