import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react"; 

import { logout } from "../../store/slices/authSlice";

import Request from "../../helpers/request.service";

const Dashboard = () => { 
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    getUser(2);
    getSelectedUser();
    getUsers();
  }, []);

  const getUser = (id) => {
    Request.get(`/users/${id}`)
      .then((response) => {
        console.log(`user id ${id}`, response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  const getSelectedUser = () => {
    let param = { limit: 5, skip: 10, select: "firstName,age" };
    Request.get("/users", param)
      .then((response) => {
        console.log("selected user", response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  const getUsers = () => {
    Request.get("/users")
      .then((response) => {
        console.log("all users", response.data.users);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  return (
    <>
      <div className="title">Dashboard Page</div>
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

export default React.memo(Dashboard);
