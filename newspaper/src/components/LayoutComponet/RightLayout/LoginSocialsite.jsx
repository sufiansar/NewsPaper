import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const LoginSocialsite = () => {
  return (
    <div className="space-y-4 flex flex-col ">
      <h1 className="font-semibold text-black">Login With</h1>
      <button className="btn text-black bg-white">
        <FaGoogle />
        Google
      </button>
      <button className="btn text-black bg-white">
        <FaGithub />
        Github
      </button>
    </div>
  );
};

export default LoginSocialsite;
