import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLinkContainer = styled(Link)`
  margin-top: auto;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  border: 1px solid white;
  transition: 0.2s linear;
  &:hover {
    background-color: transparent;
    border: 1px solid black;
  }
`;
