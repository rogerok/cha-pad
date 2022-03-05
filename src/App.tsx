import React, { useEffect, FC, Suspense } from "react";
import { useAppDispatch } from "./hooks/redux.hooks";

import { useRoutes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { setCurrentUser } from "./redux/user/userSlice";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import RequireAuth from "./hoc/RequireAuth.hoc";

/* import Layout from "./components/layout/layout-component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Posts from "./components/posts/posts-component";
import TeaPad from "./pages/tea-pad/tea-pad.component";
import TeaLibrary from "./pages/tea-library/tea-library.component";
import AddTea from "./components/add-tea/add-tea.component";
import TeaCategory from "./components/tea-category/tea-category.component";
 */
import Layout from "./components/layout/layout-component";
import SpinnerComponent from "./components/spinner/spinner.component";
/* import CardCollection from "./components/card-collection/card-collection.component";
 */ import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const CardCollection = React.lazy(
  () => import("./components/card-collection/card-collection.component")
);
const Posts = React.lazy(() => import("./components/posts/posts-component"));
const TeaPad = React.lazy(() => import("./pages/tea-pad/tea-pad.component"));
const TeaLibrary = React.lazy(
  () => import("./pages/tea-library/tea-library.component")
);
const AddTea = React.lazy(
  () => import("./components/add-tea/add-tea.component")
);
const TeaCategory = React.lazy(
  () => import("./components/tea-category/tea-category.component")
);

const WouldTaste = React.lazy(
  () => import("./components/would-taste/would-taste.component")
);

const routes = [
  {
    path: ROUTES.HOMEPAGE,
    element: <Layout />,
    children: [
      {
        path: ROUTES.TEA_LIBRARY,
        element: <TeaLibrary teaCollection={[]} />,
      },
      {
        path: ROUTES.TEA_LIBRARY_COLLECTIONS,
        element: <Posts />,
      },
      {
        path: ROUTES.TEA_PAD,
        element: (
          <RequireAuth>
            <TeaPad uiData={[]} />
          </RequireAuth>
        ),
      },
      { path: ROUTES.ADD_TEA, element: <AddTea /> },
      {
        path: ROUTES.TASTED_TEA,
        element: <TeaCategory teaCollection={[]} />,
      },
      {
        path: ROUTES.TASTED_TEA_COLLECTION,
        element: <Posts />,
      },
      {
        path: ROUTES.WOULD_TASTE_TEA,
        element: <WouldTaste />,
      },
      {
        path: ROUTES.WOULD_TASTE_COLLECTION,
        element: <Posts />,
      },
      { path: ROUTES.SIGN_IN, element: <SignInAndSignUpPage /> },
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
        //@ts-ignore
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
    <Suspense fallback={<SpinnerComponent />}>
      <React.Fragment>{elements}</React.Fragment>
    </Suspense>
  );
};

export default App;
