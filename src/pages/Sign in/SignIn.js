import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="bg-gray-50 py-10">
        <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
          <div>
            <h3 className="text-4xl font-bold text-gray-700">
              Login Your Account
            </h3>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form onClick={handleSubmit}>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    autoComplete="true"
                    className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <Link className="text-xs text-success hover:underline">
                Forget Password?
              </Link>
              <div className=" text-red-400"></div>
              <div className="flex items-center mt-4">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-success rounded-md hover:bg-green-500 focus:outline-none focus:bg-success">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-grey-600">
              Don't have an account?{" "}
              <span>
                <Link className="text-success hover:underline" to="/sign-up">
                  Sign Up
                </Link>
              </span>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 ">OR</p>
              <hr className="w-full" />
            </div>
            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border  hover:bg-gray-700 hover:text-white rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <p>Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
