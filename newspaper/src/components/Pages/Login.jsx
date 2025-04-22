import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logIn, setUser } = useContext(Authcontext);

  const [show, setShow] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const showPassToggle = () => {
    setShow(!show);
  };
  const handalSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        const result = res.user;
        setUser(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl  border border-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login Page
        </h1>

        <form onSubmit={handalSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className=" p-2 border-1 border-gray-400 w-full text-gray-800"
              required
            />
          </div>

          <div className=" relative">
            <label className="block  text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            {show ? (
              <button
                onClick={showPassToggle}
                className="absolute bg-white border-none shadow-none text-black right-4 mt-3"
              >
                <FaEyeSlash></FaEyeSlash>
              </button>
            ) : (
              <button
                onClick={showPassToggle}
                className="absolute bg-white border-none shadow-none text-black right-4 mt-3"
              >
                <FaEye></FaEye>
              </button>
            )}

            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="p-2 border-1 border-gray-400 w-full text-gray-800"
              required
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="btn bg-[#403F3F] w-full">Login</button>
        </form>

        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-red-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
