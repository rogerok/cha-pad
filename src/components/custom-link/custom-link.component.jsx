import React from "react";
import { CustomLinkContainer } from "./custom-link.styles";

const CustomLink = ({ children, ...otherProps }) => {
  return <CustomLinkContainer {...otherProps}>{children}</CustomLinkContainer>;
};

export default CustomLink;
