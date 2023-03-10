import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("User log out successfully");
      })
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link className="active:bg-inherit" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="active:bg-inherit" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="active:bg-inherit" to="/contact us">
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-neutral text-neutral-content md:text-xl py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="text-2xl text-success font-bold">Job Hunter</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <button
                onClick={() => handleLogOut()}
                className="btn btn-error text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in">
                <button className="btn btn-primary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
