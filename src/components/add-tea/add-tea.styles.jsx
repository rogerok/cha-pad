import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  p {
    vertical-align: center;
    margin-left: 40px;
  }
  label {
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(top, #222 0%, #45484d 100%);
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
      0px 1px 0px rgba(255, 255, 255, 0.4);
    &:after {
      content: "";
      width: 15px;
      height: 11px;
      position: absolute;
      top: 4px;
      left: 4px;
      border: 3px solid #fcfff4;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }
    &:hover::after {
      opacity: 0.3;
    }
  }
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }
  }
`;
