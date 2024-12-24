// src/components/Layout.jsx
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 z-20">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My React App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
