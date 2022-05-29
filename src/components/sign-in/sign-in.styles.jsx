import styled from "styled-components";

export const CustomButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
