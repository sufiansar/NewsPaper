import React, { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const SecureRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);

  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default SecureRoute;
