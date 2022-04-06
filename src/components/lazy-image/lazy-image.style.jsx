import styled, { keyframes, css } from "styled-components";

const loadingAnimation = keyframes`
0% {
   opacity: 0.1;
  }

  100% {
   opacity: 1;
  }
`;

const cardImageStyles = css`
  margin: 2rem auto;
  display: block;
  /*  width: 90%; */
  /*  min-height: 268px; */
  padding: 1rem;
  object-fit: cover;
  aspect-ratio: 1/1;
  animation: ${loadingAnimation} 1s ease-in-out;
`;

const getCardImageStyles = (props) => {
  return props.isCardImage ? cardImageStyles : "";
};

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: grey;
  opacity: 0.7;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${loadingAnimation} 1s ease-in-out;
  ${getCardImageStyles}
`;
