import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { Suspense } from "react";

import "react-toastify/dist/ReactToastify.css";

import Loader from "../src/components/common/Loader";
import PrivateRoute from "./auth/PrivateRoute";

const Dashboard = React.lazy(() => import("./components/pages/Dashboard"));
const Home = React.lazy(() => import("./components/pages/Home"));
const Login = React.lazy(() => import("./components/pages/Login"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const Test = React.lazy(() => import("./components/pages/Test"));
const UserProfile = React.lazy(() => import("./components/pages/UserProfile"));

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/user-profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
