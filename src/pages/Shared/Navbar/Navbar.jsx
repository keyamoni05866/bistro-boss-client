import React, { useContext } from "react";
import "./Navabar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Routes/AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Dish</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <button className="btn gap-2">
         
          <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-20 bg-black max-w-screen-xl text-white">
        <div className="navbar-start ">
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
              {navOptions}
            </ul>
          </div>

          <div className="">
            <h2 className=" btn-ghost normal-case text-xl mb-0 font-bold ">
              Bistro Boss <br />
              <span className="text-sm  uppercase font-semibold">
                Restaurant{" "}
              </span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 mr-4 rounded-full"
              />
              <button onClick={handleLogOut} className="btn ">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn ">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
