import { useNavigate } from "react-router-dom";
import React from "react";

import { useAuth } from "../auth/authContext";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <>
      <div className="title">Login Form</div>
      <div className="homePageContainer">
        <div>
          <button className="primaryButton" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
