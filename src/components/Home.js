import { useNavigate } from "react-router-dom";
import React from "react";

import { useAuth } from "../auth/authContext";

const Home = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <div className="title">Home Page</div>
      <div className="center">
        <img src="/img/logo192.png" alt="Logo" style={{width: '80px', height: '80px'}} />
      </div>
      <div className="homePageContainer">
        <div>
          <button
            className="primaryButton"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </button>
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
