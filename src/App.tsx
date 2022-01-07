import React, { useEffect, FC } from "react";
import { useAppDispatch } from "./hooks/redux.hooks";
import { useRoutes } from "react-router-dom";

import { setCurrentUser } from "./redux/user/userSlice";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import RequireAuth from "./hoc/RequireAuth.hoc";

import Layout from "./components/layout/layout-component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Posts from "./components/posts/posts-component";
import TeaPad from "./pages/tea-pad/tea-pad.component";
import TeaLibrary from "./pages/tea-library/tea-library.component";
import AddTea from "./components/add-tea/add-tea.component";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "tea-library", element: <TeaLibrary teaCollection={[]} /> },
      { path: "tea-library/:category", element: <Posts /> },
      {
        path: "tea-pad",
        element: (
          <RequireAuth>
            <TeaPad uiData={[]} />
          </RequireAuth>
        ),
      },
      { path: "tea-pad/add-tea", element: <AddTea /> },
      { path: "sign-in", element: <SignInAndSignUpPage /> },
    ],
  },
];

const App: FC = () => {
  const dispatch = useAppDispatch();
  const elements = useRoutes(routes);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
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

  return <React.Fragment>{elements}</React.Fragment>;
};

export default App;
