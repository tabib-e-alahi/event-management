import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully log out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="text-lg font-medium" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium" to="/about">
          About Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className="text-lg font-medium" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink className="text-lg font-medium" to="/blog">
              Blog
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="p-5">
      <div className="navbar ">
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
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* small device links  */}
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-2/5" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* lg device links  */}
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-1 justify-center items-center">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className=" m-1">
                  <img
                    className="w-14 h-14 rounded-full border-2 border-black"
                    src={user.photoURL}
                    alt="user profile pic"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[2] menu p-1 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <h1 className="text-left  font-semibold">Name:{user.displayName} </h1>
                  </li>
                  <li>
                  <button
                onClick={handleLogOut}
                className="btn bg-[#f96e85] hover:bg-[#f96e85] w-2/3  pt-4 mx-auto text-center  text-white font-semibold normal-case"
              >
                Log Out
              </button>
                  </li>
                </ul>
              </div>
              
            </div>
          ) : (
            <Link
              className="btn bg-[#f96e85] hover:bg-[#f96e85] text-lg text-white font-semibold normal-case"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
