import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

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
    color: #201e1f;
  }
`;

const logoStyles = css`
  display: inline-flex;
  align-self: center;
  margin-right: auto;
  padding: 0;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  .react-icons {
    vertical-align: middle;
    font-size: 5rem;

    @media screen and (max-width: 480px) {
      font-size: 3.5rem;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    background-color: black;
    text-align: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

export const NavOption = styled(NavLink)`
  ${navOptionsStyles};
  @media screen and (max-width: 480px) {
    display: block;
    &.active {
      color: #a8a4a6;
    }
  }
`;

export const Logo = styled(NavLink)`
  ${navOptionsStyles}
  ${logoStyles}
`;

export const BurgerButton = styled.button`
  display: none;
  @media screen and (max-width: 480px) {
    position: absolute;
    z-index: 3;
    display: block;
    background-color: transparent;
    border: none;
    color: white;
  }
`;
