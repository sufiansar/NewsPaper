import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userImag from "../../assets/user.png";
import { Authcontext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logout } = useContext(Authcontext);
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
        {user && user.email ? (
          <button onClick={logout} className="btn btn-accent">
            Log Out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-accent">
            Login
          </Link>
        )}

        {user && user.email ? (
          <div className="text-black">
            <img className="w-15 rounded-full" src={user.photoURL} alt="" />
            <p>{user.displayName}</p>
          </div>
        ) : (
          <img src={userImag} alt="" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
