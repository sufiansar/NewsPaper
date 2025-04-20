import React from "react";
import NavBar from "../Home/NavBar";
import { Outlet } from "react-router-dom";

const AuthLayOut = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayOut;
