import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* Site Header */}
      <Header />
      {children}
    </>
  );
};

export default Layout;
