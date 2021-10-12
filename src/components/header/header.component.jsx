import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./../../redux/user/user.selector";

import { auth } from "../../firebase/firebase.utils";

import { HeaderContainer, Nav, NavOption } from "./header.styles";

const Header = ({ currentUser }) => {
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
        {currentUser ? <img src={currentUser.photoURL} alt="" /> : null}
      </Nav>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
