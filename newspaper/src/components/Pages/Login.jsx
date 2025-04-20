import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl  border border-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login Page
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className=" p-2 border-1 border-gray-400 w-full text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block  text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
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
