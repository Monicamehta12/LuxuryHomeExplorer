import React, { useEffect, useState } from "react";
import {
  faAngleRight,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, showSubMenu] = useState(false);
  const location = useLocation();

  // Toggle function to handle submenu
  const handleToggle = (menu) => {
    showSubMenu(subMenu === menu ? null : menu); // Close the menu if it is already open
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle menu visibility
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="z-30 w-full h-32 flex justify-between items-center text-white absolute">
        <div className="w-auto h-20 overflow-clip z-30 mt-4 mx-6">
          {/* logo */}
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </Link>
        </div>
        <div className="z-20 transition-opacity duration-700 ease-in-out w-full h-full absolute"></div>
        {/* Hamburger Icon */}
        <div
          className={`bg-[#464646]/75 h-10 w-10 items-center fixed justify-center right-7 rounded-full cursor-pointer z-30 ${
            isOpen ? "hidden" : "flex"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav
        className={`flex flex-col text-white items-end gap-12 px-12 md:px-24 py-16 z-30 bg-[#000000]/75 font-bold fixed top-0 w-full h-full transition-all duration-500 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-[100vw]"
        }`}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="mb-10 text-2xl font-semibold hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        />
        <Link
          to="/"
          className={`flex items-center gap-4 group ${
            location.pathname === "/" ? "active-page" : ""
          }`}
          onClick={closeMenu}
        >
          Home{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
              location.pathname === "/" ? "absolute left-[-9999px]" : ""
            }`}
          />
        </Link>
        <Link
          to="/about"
          className={`flex items-center gap-4 group ${
            location.pathname === "/about" ? "active-page" : ""
          }`}
          onClick={closeMenu}
        >
          About{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
              location.pathname === "/about" ? "absolute left-[-9999px]" : ""
            }`}
          />
        </Link>
        <span
          className="cursor-pointer flex items-center gap-4 group"
          onClick={() => handleToggle("buying")}
        >
          Buying{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            className="transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110"
          />
        </span>
        {/* submenu */}
        {subMenu === "buying" && (
          <div className="relative right-0 flex flex-col gap-12 items-end text-slate-400">
            <Link
              to="/buying/mortgage-calculator"
              className={`flex items-center gap-4 group ${
                location.pathname === "/buying/mortgage-calculator" ? "active-page text-white" : ""
              }`}
              onClick={closeMenu}
            >
              Mortgage Calculator{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
                  location.pathname === "/buying/mortgage-calculator" ? "absolute left-[-9999px]" : ""
                }`}
              />
            </Link>
            <Link
              to="/buying/listings"
              className={`flex items-center gap-4 group ${
                location.pathname === "/buying/listings" ? "active-page text-white" : ""
              }`}
              onClick={closeMenu}
            >
              Listings{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
                  location.pathname === "/buying/listings" ? "absolute left-[-9999px]" : ""
                }`}
              />
            </Link>
            <Link
              to="/buying/buying-guide"
              className={`flex items-center gap-4 group ${
                location.pathname === "/buying/buying-guide" ? "active-page text-white" : ""
              }`}
              onClick={closeMenu}
            >
              Buying Guide{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
                  location.pathname === "/buying/buying-guide" ? "absolute left-[-9999px]" : ""
                }`}
              />
            </Link>
          </div>
        )}

        <span
          className="cursor-pointer flex items-center gap-4 group"
          onClick={() => handleToggle("selling")}
        >
          Selling{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            className="transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110"
          />
        </span>
        {/* submenu */}
        {subMenu === "selling" && (
          <div className="relative right-0 flex flex-col gap-12 items-end text-slate-400">
            <Link
              to="/selling/free-home-evaluation"
              className={`flex items-center gap-4 group ${
                location.pathname === "/selling/free-home-evaluation" ? "active-page text-white" : ""
              }`}
              onClick={closeMenu}
            >
              Free Home Evaluation{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
                  location.pathname === "/selling/free-home-evaluation" ? "absolute left-[-9999px]" : ""
                }`}
              />
            </Link>
            <Link
              to="/selling/selling-guide"
              className={`flex items-center gap-4 group ${
                location.pathname === "/selling/selling-guide" ? "active-page text-white" : ""
              }`}
              onClick={closeMenu}
            >
              Selling Guide{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
                  location.pathname === "/selling/selling-guide" ? "absolute left-[-9999px]" : ""
                }`}
              />
            </Link>
          </div>
        )}

        <span
          className="cursor-pointer flex items-center gap-4 group"
          onClick={() => handleToggle("information")}
        >
          Information{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            className="transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110"
          />
        </span>
        {/* submenu */}
        {subMenu === "information" && (
          <div className="relative right-0 flex flex-col gap-12 items-end text-slate-400">
            <Link
              to="/information/real-estate-report"
              className={`flex items-center gap-4 group ${
                location.pathname === "/information/real-estate-report" ? "active-page text-white" : ""
              }`}
              onClick={closeMenu}
            >
              Free Real Estate Reports{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
                  location.pathname === "/information/real-estate-report" ? "absolute left-[-9999px]" : ""
                }`}
              />
            </Link>
          </div>
        )}

        <Link
          to="/contact"
          className={`flex items-center gap-4 group ${
            location.pathname === "/contact" ? "active-page" : ""
          }`}
          onClick={closeMenu}
        >
          Contact{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`transition-transform duration-300 transform group-hover:translate-x-3 group-hover:scale-110 ${
              location.pathname === "/contact" ? "absolute left-[-9999px]" : ""
            }`}
          />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
