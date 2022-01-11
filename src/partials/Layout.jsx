import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight flex flex-col min-h-screen overflow-hidden">
      {/* Site Header */}
      <Header />
      {children}
    </div>
  );
};

export default Layout;
