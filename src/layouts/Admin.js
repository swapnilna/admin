import { Route, Routes } from "react-router-dom";
import React from "react";

//import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PrivateRoute from "../auth/PrivateRoute";
import Sidebar from "../components/common/Sidebar";

const Dashboard = React.lazy(() => import("../components/pages/Dashboard"));
const Home = React.lazy(() => import("../components/pages/Home"));
const UserProfile = React.lazy(() => import("../components/pages/UserProfile"));
const NotFound = React.lazy(() => import("../components/pages/NotFound"));

function Admin() {
  return (
    <>
      <div className="app">
        <Header />

        <div className="row">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <main>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Admin;
