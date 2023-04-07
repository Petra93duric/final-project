import React from "react";
import LinkButton from "../LinkButton";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="div-sideBar">
      <LinkButton content="Reports" linkTo="/admin_home/reports" />
      <LinkButton content="Create Report" linkTo="/admin_home/create_reports" />
    </div>
  );
};

export default SideBar;
