import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const loadingAnimation = keyframes`
    0% {
      opacity: 0.1
    }
    100% {
      opacity: 1;
    }

`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TeaPhoto = styled.img`
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 4rem auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px color black;
  animation: ${loadingAnimation} 300ms ease-in-out;
`;

export const CloseModalButton = styled(AiOutlineClose)`
  position: absolute;
  top: 3rem;
  right: 3rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 2rem;
  color: white;
`;
