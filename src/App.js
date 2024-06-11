import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import { AuthProvider } from "./auth/authContext";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./auth/PrivateRoute";
import Test from "./components/Test";

function App() {
  return (
    <AuthProvider>
      <Router>
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

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
