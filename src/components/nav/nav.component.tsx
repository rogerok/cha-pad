import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSlice";
import { auth } from "../../firebase/firebase.utils";

import { ROUTES } from "../../routes/routes";
import { GiTeapotLeaves } from "react-icons/gi";
import { NavContainer, NavOption } from "./nav.styles";

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <NavContainer>
      <NavOption to="/" isHomeLink>
        <GiTeapotLeaves />
      </NavOption>
      <NavOption to={ROUTES.TEA_LIBRARY}>Виды чая</NavOption>
      <NavOption to={ROUTES.TEA_PAD}>Мой дневник</NavOption>

      {currentUser ? (
        <NavOption as="div" onClick={() => auth.signOut()}>
          Выйти
        </NavOption>
      ) : (
        <NavOption to="/sign-in">Войти</NavOption>
      )}
    </NavContainer>
  );
};

export default Nav;
