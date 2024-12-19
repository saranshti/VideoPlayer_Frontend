import React, { useState } from "react";
import Hamburger from "../assets/svg/Hamburger";
import "../css/Header.css";
import Logo from "../assets/svg/Logo";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-[#121212]">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Logo and Sidebar Toggle */}
            <div className="flex items-center">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                <Hamburger />
              </button>
              <Logo className="flex ml-2 w-10 h-10" />
            </div>

            {/* User Profile and Dropdown */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="User photo"
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                    aria-labelledby="dropdown-user"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <a href="#" className="drpdown-menu">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="drpdown-menu">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="#" className="drpdown-menu">
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a href="#" className="drpdown-menu">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
