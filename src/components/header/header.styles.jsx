import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const navOptionsStyles = css`
  padding: 30px;
  cursor: pointer;
  color: #fdfdfdeb;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: #f5f5f5c5;
  }
  &.active {
    color: #8b8b8beb;
  }
`;

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-self: center;
  max-width: 100%;
  border-bottom: 1px solid white;
`;

export const Nav = styled.nav`
  display: flex;
  align-content: center;
  margin-left: auto;
  padding: 0 100px;
`;

export const NavOption = styled(NavLink)`
  ${navOptionsStyles}
`;
