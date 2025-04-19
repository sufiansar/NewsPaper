import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="">
      <h1 className="font-semibold mb-4 text-black">Find Us</h1>
      <div className="flex join-vertical gap-4">
        <button className="btn join-item justify-start text-black bg-white ">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn join-item justify-start text-black bg-white">
          <FaInstagram />
          Instragram
        </button>
        <button className="btn join-item justify-start text-black  bg-white">
          <FaTwitter />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
