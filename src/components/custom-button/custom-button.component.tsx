import React, { FC } from "react";
import { CustomButtonContainer } from "./custom-button.styles";

interface CustomButtonProps {
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isGoogleButton?: boolean;
  isPaginationButton?: boolean;
  primary?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
