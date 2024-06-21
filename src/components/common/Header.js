import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { logout } from "../../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <div>Admin Panel</div>
      <div>
        <span> Welcome, {authUser?.firstName} </span>
        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
