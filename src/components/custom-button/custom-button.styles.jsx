import styled, { css } from "styled-components";

export const customButtonStyles = css`
  background-color: black;
  color: white;
  border: 5px solid white;
  transition: 0.2s linear;
  &:hover {
    background-color: transparent;
    border: 5px solid black;
  }
`;

export const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: #ffffff;
`;

const getButtonsStyles = (props) => {
  return props.isGoogleButton ? googleSignInButtonStyles : "";
};

export const CustomButtonContainer = styled.button`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  max-width: 45%;
  ${customButtonStyles};
  ${getButtonsStyles}
`;
