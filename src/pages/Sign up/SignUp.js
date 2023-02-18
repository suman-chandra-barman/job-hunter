import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.password_confirmation.value;
    console.log(name, email, password, confirmPassword);

    if (password === confirmPassword) {
      // create user with email and password
      createUser(email, password)
        .then((result) => {
          // Signed in
          const user = result.user;
          console.log(user);
          if (user.uid) {
            // update user name
            updateUser(name);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setError("Password didn't match. Please try again");
    }
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <h3 className="text-4xl font-bold text-gray-700">
            Sign Up Your Account
          </h3>
        </div>
        <div className="w-full px-6 py-10 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Full Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block p-2 w-full mt-1 border-gray-300 rounded-md border border-1 shadow-sm"
                  placeholder="Enter full name"
                  required
                />
              </div>
            </div>
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
                  required
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
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  autoComplete="true"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  autoComplete="true"
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter confirm password"
                  required
                />
              </div>
            </div>

            <div className=" text-red-400">{}</div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-success rounded-md hover:bg-green-500 focus:outline-none focus:bg-success">
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-success hover:underline" to="/sign-in">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
