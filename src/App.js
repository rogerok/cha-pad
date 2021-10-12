import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import TeaPad from "./pages/tea-pad/tea-pad.component";
import TeaLibrary from "./pages/tea-library/tea-library.component";
import Header from "./components/header/header.component";

import background from "./img/background-image.jpg";

import "./App.css";

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //createUserProfileDocument returns user reference object
        const userRef = await createUserProfileDocument(userAuth);
        //if user logged in we add event listener and update our app state, if something was changed in our user database
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        //userAuth will be null, if user log out
        setCurrentUser(userAuth);
      }
    });
    return unsubscribeFromAuth;
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <main
            style={{
              margin: "0 auto",
              padding: "0 50px",
              height: "100vw",
              maxWidth: "1370px",
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#232526",
              color: "white",
            }}
          >
            <Header />
            <Route exact path="/tea-library" component={TeaLibrary} />
            <Route exact path="/tea-pad" component={TeaPad} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </main>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
