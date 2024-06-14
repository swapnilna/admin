import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import { AuthProvider } from "./auth/authContext";
import PrivateRoute from "./auth/PrivateRoute";

const Dashboard = React.lazy(() => import('./components/pages/Dashboard'));
const Home = React.lazy(() => import('./components/pages/Home'));
const Login = React.lazy(() => import('./components/pages/Login'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));
const Test = React.lazy(() => import('./components/pages/Test'));
const UserProfile = React.lazy(() => import('./components/pages/UserProfile'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div> Loading..</div>}>
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
    </AuthProvider>
  );
}

export default App;
