import React, { FC } from "react";

import { useAppSelector } from "../../hooks/redux.hooks";
import { useLocation, Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/userSlice";

const AuthorizedRoute: FC = ({ children }): JSX.Element => {
  const currentUser = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  } else {
    return <>{children}</>;
  }
};

export default AuthorizedRoute;
