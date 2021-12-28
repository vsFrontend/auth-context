import { useContext } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../views/auth/Login";

import Home from "../views/Home/Home";
import PageNotFound from "../views/PageNotFound";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" index element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;

function RequireAuth() {
  let [state] = useContext(AuthContext);
  let location = useLocation();
  if (!state.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
