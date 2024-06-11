import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "./authContext";

const PrivateRoute = ({ children }) => {
  let { isAuthenticated } = useAuth();
  let location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
