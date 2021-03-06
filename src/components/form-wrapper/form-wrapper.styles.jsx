import styled from "styled-components";

export const FormWrapperContainer = styled.div`
  margin-top: 50px;
  width: ${(props) => (props.wide ? "100%" : "40%")};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid white;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    padding: 1rem;
    width: 100%;
  }
`;
