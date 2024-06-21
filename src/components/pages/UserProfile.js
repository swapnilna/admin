import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback } from "react";

import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../../store/slices/usersSlice";

import "./../../css/UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handelDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleAddUser = () => {
    let body = {
      firstName: "Swapnil",
      lastName: "N",
      age: 250,
      id: 209,
    };

    dispatch(addUser(body));
  };

  const handleUpdateUser = (id) => {
    let body = {
      firstName: "Test",
      lastName: "Name",
      age: 29,
      id,
    };

    dispatch(updateUser({ id, body }));
  };

  const getUsers = useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <div className="userList">
        <div className="center">Users List </div>
        <ul>
          {users.map((user, index) => (
            <li key={user.id} className="user-list-item">
              <span className="user-name">{user.firstName}</span>
              <span className="action-buttons">
                <button
                  className="update-button"
                  onClick={() => handleUpdateUser(user.id)}
                >
                  Update
                </button>
                <button
                  className="delete-button"
                  onClick={() => handelDeleteUser(user.id)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="homePageContainer">
        <button className="primaryButton" onClick={handleAddUser}>
          Add User
        </button>
      </div>
    </>
  );
};

export default UserProfile;
