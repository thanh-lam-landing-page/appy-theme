// @ts-nocheck
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import CustomLink from "../partials/CustomLink";
import Dropdown from "../utils/Dropdown";
import LightSwitchSvg from "../assets/svg/LightSwitchSvg";

const Header = () => {
  // Handle light mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const dark = localStorage.getItem(".dark-mode");
      if (dark === null) {
        return true;
      } else {
        return dark === "true";
      }
    }
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            <div className="block cursor-pointer">
              <CustomLink to="/" aria-label="Landing Page">
                <Image src={Logo.src} alt="logo" width="32px" height="32px" />
              </CustomLink>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            <ul className="flex flex-grow flex-wrap items-center font-medium">
              <li>
                <CustomLink
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/blog"
                  className="text-gray-600 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Blog
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/testimonials"
                  className="text-gray-600 hover:text-gray-900 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Testimonials
                </CustomLink>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resource">
                {/* 2nd level */}
                <li>
                  <CustomLink
                    to="/help"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight transition duration-150">
                    Help Center
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    to="/404"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight transition duration-150">
                    404
                  </CustomLink>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop light switch */}
            <div className="form-switch focus-within:outline-blue-200 flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"></span>
                <LightSwitchSvg className="absolute inset-0" />
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <CustomLink to="/contact" className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                  Request code
                </CustomLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
