import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleDropdown = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setIsLoggedIn(false);
    setShowLogout(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-3 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        {/* Right: Account/Login */}
        <div className="relative">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                Account
              </button>

              {showLogout && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-fade-in">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
