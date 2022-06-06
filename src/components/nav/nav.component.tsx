import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSlice";
import { auth } from "../../firebase/firebase.utils";

import useDisableByScroll from "../../hooks/useDisableByScroll";

import { ROUTES } from "../../routes/routes";

import { GiTeapotLeaves, GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

import {
  NavContainer,
  NavList,
  NavOption,
  Logo,
  BurgerButton,
} from "./nav.styles";

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [isOpen, toggleOpen] = useState(false);
  useDisableByScroll(isOpen);

  return (
    <NavContainer>
      <Logo to="/">
        <GiTeapotLeaves className="react-icons" />
      </Logo>

      <BurgerButton onClick={() => toggleOpen((prev) => !prev)}>
        {isOpen ? (
          <CgClose className="react-icons" />
        ) : (
          <GiHamburgerMenu className="react-icons" />
        )}
      </BurgerButton>

      <NavList open={isOpen} onClick={() => toggleOpen(false)}>
        <li>
          <NavOption to={ROUTES.TEA_LIBRARY}>Чайная лента</NavOption>
        </li>
        <li>
          <NavOption to={ROUTES.TEA_PAD}>Мой дневник</NavOption>
        </li>
        <li>
          {currentUser ? (
            <NavOption as="div" onClick={() => auth.signOut()}>
              Выйти
            </NavOption>
          ) : (
            <NavOption to="/sign-in">Войти</NavOption>
          )}
        </li>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
