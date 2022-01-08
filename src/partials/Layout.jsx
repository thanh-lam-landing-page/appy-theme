import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site Header */}
      <Header />
      {children}
    </div>
  );
};

export default Layout;
