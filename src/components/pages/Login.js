import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { loginUser } from "../../store/slices/authSlice"; 

import { notifications } from "../../helpers/common";

import "../../css/LoginForm.css";

const Login = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass"); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }))
      .then((res) => {
        if (res.type === "auth/login/fulfilled") { 
          navigate("/");
          notifications("Your action was successful!", "success");
        }
      })
      .catch((error) => {
        console.log("Failed to login:", error);
      });
  };

  return (
    <>
      <div className="title">Login Form</div>
      <div className="homePageContainer">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <button className="primaryButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
