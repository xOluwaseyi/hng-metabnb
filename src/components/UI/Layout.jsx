import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/* layout component to make header and footer show across all pages */}
      <Header />

      {/* content to be displayed */}
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
