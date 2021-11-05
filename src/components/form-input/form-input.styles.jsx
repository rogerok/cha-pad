import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export const WrapperInput = styled.div`
  margin-top: 20px;
  max-width: 100%;
  border: 1px solid white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 0;
  font-size: 16px;

  &:focus {
    outline: 5px solid black;
    border: none;
    background-color: transparent;
  }
`;

export const Label = styled.label`
  font-size: 18px;
`;
