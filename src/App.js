import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { Suspense } from "react";

import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "../src/layouts/Admin";
import AuthLayout from "../src/layouts/Auth";
import Loader from "../src/components/common/Loader";

const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/auth/*" element={<AuthLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
