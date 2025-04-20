import React from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="nav flex justify-between py-5 items-center">
      <div></div>
      <div className="space-x-3 items-center text-black font-semibold ">
        <NavLink className="px-2 py-1 rounded-xl" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-2 py-1 rounded-xl" to={"about"}>
          About
        </NavLink>
        <NavLink className="px-2 py-1 rounded-xl" to={"career"}>
          Career
        </NavLink>
      </div>
      <div className="flex gap-3 mr-4">
        <Link to={"/auth/login"} className="btn btn-accent">
          Login
        </Link>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
