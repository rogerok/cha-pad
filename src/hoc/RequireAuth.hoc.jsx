import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/userSlice";

const RequireAuth = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  if (!currentUser)
    return <Navigate to="/sign-in" state={{ from: location }} />;

  return children;
};

export default RequireAuth;
