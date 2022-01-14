import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-col min-h-screen overflow-hidden">
    
      {/* Site Header */}
      <Header />
      
      {children}
      
      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
