import React from "react";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSlice";

import { auth } from "../../firebase/firebase.utils";

import { HeaderContainer, Nav, NavOption } from "./header.styles";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <HeaderContainer>
      <Nav>
        <NavOption to="/tea-library">Виды чая</NavOption>
        <NavOption to="/tea-pad">Мой дневник</NavOption>
        {currentUser ? (
          <NavOption as="div" onClick={() => auth.signOut()}>
            Выйти
          </NavOption>
        ) : (
          <NavOption to="/sign-in">Войти</NavOption>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
