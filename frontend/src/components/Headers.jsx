import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on item click (forwarded to Navbar component)
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md ring-1 ring-slate-900/5 z-50">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-4 flexBetween max-xs:px-4">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            height={60}
            width={60}
            className="hover:opacity-90 transition-opacity duration-300"
          />
        </Link>

        {/* Navbar Desktop */}
        <Navbar containerStyles="hidden md:flex gap-x-6 xl:gap-x-10 text-gray-700 hover:text-black transition-colors duration-200 medium-15" />

        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpen
              ? "flex items-start flex-col gap-y-8 fixed top-20 right-4 p-8 bg-white rounded-2xl shadow-xl w-64 text-gray-800 medium-16 ring-1 ring-slate-900/10 transition-all duration-300 ease-in-out"
              : "flex items-start flex-col gap-y-8 fixed top-20 p-8 bg-white rounded-2xl shadow-xl w-64 text-gray-800 medium-16 ring-1 ring-slate-900/10 transition-all duration-300 ease-in-out -right-full"
          }`}
          onLinkClick={handleMenuItemClick} // Custom prop for closing
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-x-4">
          {!menuOpen ? (
            <MdMenu
              className="cursor-pointer text-gray-700 hover:text-black p-1 ring-1 ring-gray-300 h-9 w-9 rounded-full transition-colors duration-200"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="cursor-pointer text-gray-700 hover:text-black p-1 ring-1 ring-gray-300 h-9 w-9 rounded-full transition-colors duration-200"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Headers;
