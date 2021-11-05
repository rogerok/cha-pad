import styled from "styled-components";

export const SelectContainer = styled.select`
  margin: 15px 0 30px 0;
  width: 100%;
  padding: 15px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  &:focus {
    outline: 5px solid black;
    border: none;
  }
`;
export const SelectOption = styled.option`
  display: block;
  padding: 15px;
  background-color: #201e1f;
  border-bottom: 1px solid white;
`;
