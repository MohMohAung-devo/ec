import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
