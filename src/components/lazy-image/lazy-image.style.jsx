import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
0% {
   opacity: 0.1;
  }

  100% {
   opacity: 1;
  }
`;

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
  animation: ${loadingAnimation} 3s ease-in-out;
`;
