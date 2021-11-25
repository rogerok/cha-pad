import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { setCurrentUser, selectCurrentUser } from "./redux/user/userSlice";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import TeaPad from "./pages/tea-pad/tea-pad.component";
import TeaLibrary from "./pages/tea-library/tea-library.component";
import Header from "./components/header/header.component";

import background from "./img/background-image.jpg";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        //createUserProfileDocument returns user reference object
        const userRef = await createUserProfileDocument(userAuth);
        //if user logged in we add event listener and update our app state, if something was changed in our user database
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        //userAuth will be null, if user log out
        dispatch(setCurrentUser(userAuth));
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

export default App;
