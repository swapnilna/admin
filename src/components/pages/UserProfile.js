import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import { useAuth } from "../../auth/authContext";
import Request from "../../helpers/request.service";

const UserProfile = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);

  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("state");
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    let param = { limit: 5, skip: 10, select: "id,firstName,age" };
    Request.get("/users", param)
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log("Error fetching users:", error); // This will log any errors that occur during the fetch
      });
  };

  return (
    <>
      <div className="title">Welcome, {authUser?.firstName} </div>
      <div>
        <ul>
          {users.map((user, index) => {
            return <li key={index}> {user?.firstName}</li>;
          })}
        </ul>
      </div>
      <div className="homePageContainer">
        <div>
          <button
            className="primaryButton"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
