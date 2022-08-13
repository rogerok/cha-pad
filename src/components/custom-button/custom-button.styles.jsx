import styled, { css } from "styled-components";

const customButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid gray;
  transition: 0.2s ease-out;
  cursor: pointer;
  min-width: 30%;
  max-width: 45%;
  padding: 1rem;

  @media (hover: hover) {
    &:hover {
      background-color: transparent;
      border: 1px solid white;
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 480px) {
    min-width: 100%;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: #ffffff;
`;
const paginationButtonStyles = css`
  width: 3rem;
`;

const getButtonsStyles = (props) => {
  if (props.isGoogleButton) return googleSignInButtonStyles;
  if (props.isPaginationButton) return paginationButtonStyles;
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
