import React, { FC } from "react";
import { StyledTitle } from "./title.styles";

const Title: FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
