import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
  console.log(currentUser);
  return (
    <React.Fragment>
      <Switch>
        <main
          className="main-bg"
          style={{
            margin: "0 auto",
            padding: "0 50px",
            minHeight: "100vh",
            maxWidth: "1370px",
            minWidth: "100%",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            backgroundColor: "#232526",
            color: "white",
          }}
        >
          <Header />
          <Route path="/tea-library/" component={TeaLibrary} />
          <Route
            path="/tea-pad"
            render={() => (true ? <TeaPad /> : <Redirect to="/sign-in" />)}
          />
          <Route
            exact
            path="/sign-in"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </main>
      </Switch>
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
