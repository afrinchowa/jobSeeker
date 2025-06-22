import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const {user ,signOutUser} =useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }
  
  
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Start - Mobile dropdown and logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Open Menu"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">
            <li><a className="hover:text-primary">Home</a></li>
            <li>
              <a className="hover:text-primary">Services</a>
              <ul className="p-2 bg-base-200 rounded-box">
                <li><a>Design</a></li>
                <li><a>Development</a></li>
              </ul>
            </li>
            <li><a className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-primary">Job Seeker</a>
      </div>

      {/* Center - Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="hover:text-primary">Home</a></li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:text-primary">Services</summary>
              <ul className="p-2 bg-base-200 rounded-box">
                <li><a>Design</a></li>
                <li><a>Development</a></li>
              </ul>
            </details>
          </li>
          <li><a className="hover:text-primary">Contact</a></li>
        </ul>
      </div>

      {/* End - Action button */}
      <div className="navbar-end">
        {
          user? <> <button onClick={handleSignOut} className="btn">Log out</button>
          </>:<> <Link className="btn btn-primary text-white" to="/register">Register</Link>
          <Link className="btn btn-primary text-white" to="/login">Signin</Link></>
        }
       
      
   
      </div>
    </div>
  );
};

export default Navbar;
