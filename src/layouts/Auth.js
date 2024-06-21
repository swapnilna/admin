import { Route, Routes } from "react-router-dom";
import React from "react";

const Login = React.lazy(() => import("../components/pages/Login"));
const Test = React.lazy(() => import("../components/pages/Test"));
const NotFound = React.lazy(() => import("../components/pages/NotFound"));

function Auth() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
