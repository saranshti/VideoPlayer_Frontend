import React from "react";
import Header from "./Header";
import AllRoutes from "../pages/AllRoutes";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-800">
        {/* <div className="ml-60 pl-4">{children}</div> */}
        <div className="ml-64">
          <AllRoutes />
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky w-full bottom-0 bg-gray-800 text-white border-t border-white py-4 z-20 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My React App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
