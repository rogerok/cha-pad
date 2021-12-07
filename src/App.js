import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate, useRoutes } from "react-router-dom";

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
      { path: "tea-library", element: <TeaLibrary /> },
      { path: "tea-library/:category", element: <Posts /> },
      {
        path: "tea-pad",
        element: (
          <RequireAuth>
            <TeaPad />
          </RequireAuth>
        ),
      },
      { path: "tea-pad/add-tea", element: <AddTea /> },
      { path: "sign-in", element: <SignInAndSignUpPage /> },
    ],
  },
];

const App = () => {
  const dispatch = useDispatch();
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

  return (
    <React.Fragment>
      {elements}

      {/*       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tea-library" element={<TeaLibrary />} />
          <Route path="tea-library/:category" element={<Posts />} />
          <Route path="tea-pad" element={<TeaPad />}></Route>
          <Route path="tea-pad/add-tea" element={<AddTea />} />
          <Route path="sign-in" element={<SignInAndSignUpPage />} />
        </Route>
      </Routes> */}
    </React.Fragment>
  );
};

export default App;
