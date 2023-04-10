import React from "react";
import LinkButton from "../LinkButton";
import "./sidebar.css";

const SideBar = ({ selectedCand, selectedComp }) => {
  
  return (
    <div className="div-sideBar">
      <LinkButton content="Reports" linkTo="/admin_home/reports" />
      <LinkButton content="Create Report" linkTo="/admin_home/create_reports" />
      <h2>{selectedCand}</h2>
      <h2>{selectedComp}</h2>
    </div>
   
  );
};

export default SideBar;
