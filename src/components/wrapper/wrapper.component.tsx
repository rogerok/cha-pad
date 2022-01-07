import React, { FC } from "react";
import { Wrapper } from "./wrapper.styles";

const WrapperComponent: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapperComponent;
