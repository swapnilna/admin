import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let location = useLocation(); 

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
