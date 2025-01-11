import React from "react";
import { useNavigate } from "react-router-dom";
import sideBarIcons from "./sidebar.json";

import Home from "../assets/svg/Home";
import History from "../assets/svg/History";
import Playlist from "../assets/svg/Playlist";
import LikedVideo from "../assets/svg/LikedVideo";
import Subscribers from "../assets/svg/Subscribers";
import MyVideos from "../assets/svg/MyVideos";

const iconComponents = {
  Home,
  History,
  Playlist,
  LikedVideo,
  Subscribers,
  MyVideos,
};

// A reusable sidebar item component
const SidebarItem = ({ children, label, badge, href }) => {
  const navigation = useNavigate();
  const handleClick = React.useCallback(() => {
    navigation(href);
  }, [navigation, href]);
  const icon = children
    ? React.cloneElement(children, {
        className:
          "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
      })
    : null;
  return (
    <li className="cursor-pointer" onClick={handleClick}>
      <div className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <div className="flex items-center">
          <div className="mr-3">{icon}</div>
          <span className="flex whitespace-nowrap">{label}</span>
        </div>
        {badge && (
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 ml-auto">
            {badge}
          </span>
        )}
      </div>
    </li>
  );
};

const SideBar = ({ isOpen }) => {
  // console.log("isOpen", isOpen);
  return (
    <>
      {true && (
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform sm:translate-x-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {sideBarIcons.map((item) => {
                const IconComponent = iconComponents[item.icon];
                return (
                  <SidebarItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    badge={item.badge}
                  >
                    {IconComponent && <IconComponent />}
                  </SidebarItem>
                );
              })}
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default SideBar;
