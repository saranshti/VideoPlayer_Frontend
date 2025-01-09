import React, { useState, useContext } from "react";
import Hamburger from "../assets/svg/Hamburger";
import Logo from "../assets/svg/Logo";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContextProvider";
import { toast } from "react-toastify";
import axios from "axios";
import "../css/Header.css";
import SideBar from "./SideBar";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = useNavigate();

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  const Server_Api_Url = import.meta.env.VITE_APP_SERVER_API;
  const { setIsAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSignout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${Server_Api_Url}/users/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        setIsAuthenticated(false);
        sessionStorage.clear();
        navigation("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#121212] border-b border-white">
        {/* Navigation Bar */}
        <nav className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              {/* Left: Hamburger and Logo */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={toggleSidebar}
                  aria-controls="logo-sidebar"
                  className="p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <Hamburger />
                </button>
                <Logo className="ml-2 w-10 h-10" />
              </div>

              {/* Center: Search Bar */}
              <div className="flex justify-center flex-grow">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-1/3 px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Right: User Profile and Dropdown */}
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
                          <a
                            onClick={(e) => handleSignout(e)}
                            className="drpdown-menu"
                          >
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
      <SideBar isOpen={sidebarOpen} />
    </>
  );
};

export default Header;
