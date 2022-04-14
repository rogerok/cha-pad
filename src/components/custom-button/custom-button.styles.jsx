import styled, { css } from "styled-components";

const customButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid gray;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    padding: 15px;
    background-color: transparent;
    border: 1px solid white;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: #ffffff;
`;
const paginationButtonStyles = css`
  width: 3rem;
`;

const primaryButtonStyles = css`
  min-width: 40%;
  max-width: 45%;
`;

const getButtonsStyles = (props) => {
  if (props.isGoogleButton) return googleSignInButtonStyles;
  if (props.isPaginationButton) return paginationButtonStyles;
  if (props.primary) return primaryButtonStyles;
  return "";
};

export const CustomButtonContainer = styled.button`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${customButtonStyles};
  ${getButtonsStyles}
`;
