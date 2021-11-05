import styled from "styled-components";

export const TextAreaComponent = styled.textarea`
  margin-bottom: 30px;
  width: 100%;
  height: 20vh;
  padding: 15px;
  background-color: transparent;
  border: 1px solid white;
  resize: none;
  color: white;
  font-size: 18px;
  &:focus {
    outline: 5px solid black;
    border: none;
  }
  &::placeholder {
    color: white;
  }
`;
