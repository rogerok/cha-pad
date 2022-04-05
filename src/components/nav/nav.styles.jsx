import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { GiTeapotLeaves } from "react-icons/gi";

const navOptionsStyles = css`
  padding: 2rem;
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

const toHomeLinkStyles = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 70px;

  &.active {
    color: #fdfdfdeb;
  }
`;

const getHomeLinkStyles = (props) => {
  return props.isHomeLink ? toHomeLinkStyles : "";
};

export const NavContainer = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 0 2rem;
  margin-right: auto;
`;

export const NavOption = styled(NavLink)`
  ${navOptionsStyles};
  ${getHomeLinkStyles}
`;

/* export const HomeIcon = styled(GiTeapotLeaves)`
  font-size: 50px;
`; */
