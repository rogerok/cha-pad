import React, { FC } from "react";
import { CustomLinkContainer } from "./custom-link.styles";

interface CustomLinkProps {
  to: string;
}

const CustomLink: FC<CustomLinkProps> = ({ children, ...otherProps }) => {
  return <CustomLinkContainer {...otherProps}>{children}</CustomLinkContainer>;
};

export default CustomLink;
