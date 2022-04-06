import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSlice";
import { auth } from "../../firebase/firebase.utils";

import { ROUTES } from "../../routes/routes";
import { GiTeapotLeaves } from "react-icons/gi";
import { NavContainer, NavOption, NavToHomeOption } from "./nav.styles";

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <NavContainer>
      <NavToHomeOption to="/">
        <GiTeapotLeaves />
      </NavToHomeOption>
      <NavOption to={ROUTES.TEA_LIBRARY}>Чайная лента</NavOption>
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
