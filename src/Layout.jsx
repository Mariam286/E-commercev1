import React from "react";
import Nav1 from "./Nav1";
import Footerb from "./Footerb";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Layout() {
  return (
    <div
      style={{
        maxWidth: "2500px",
        width: "100%",
        minWidth: "375px",
        minHeight: "110vh",
      }}
    >
      <div style={{ maxWidth: "2500px", width: "100%", minWidth: "375px" }}>
        <Nav1 />
      </div>
      <div
        style={{
          minHeight: "100vh",
          maxWidth: "2500px",
          width: "100%",
          minWidth: "375px",
        
        }}
      >
        <Outlet />
      </div>

      <div style={{ maxWidth: "2500px", width: "100%", minWidth: "375px" }}>
        <Footerb />
      </div>
    </div>
  );
}

export default Layout;
