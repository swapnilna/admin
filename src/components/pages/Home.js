import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

import { logout } from "../../store/slices/authSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="title">Home Page</div>
      <div className="center">
        <img
          src="/img/logo192.png"
          alt="Logo"
          style={{ width: "80px", height: "80px" }}
        />
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
          <button
            className="primaryButton"
            onClick={() => {
              navigate("/user-profile");
            }}
          >
            Users List
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
