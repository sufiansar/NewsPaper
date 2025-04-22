import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate, setUser } = useContext(Authcontext);
  const navigate = useNavigate();

  const handalSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");
    const url = form.get("url");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        profileUpdate({ displayName: name, photoURL: url });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md m-10 md:my-10 p-8 space-y-6 bg-white shadow-xl rounded-2xl border border-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Register Page
        </h1>

        <form onSubmit={handalSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-1 w-full text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 border-1 w-full text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="p-2 border-1 w-full text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              name="url"
              placeholder="Enter photo URL"
              className="p-2 border-1 w-full text-gray-800"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="checkbox checkbox-neutral"
              required
            />
            <span className="text-sm text-gray-700">
              Accept{" "}
              <a href="#" className="text-red-500 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          <button className="btn bg-[#403F3F] w-full">Register</button>
        </form>

        <p className="text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-black font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
