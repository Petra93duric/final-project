import React, { useContext } from "react";
import { applicationContext } from "../../context";
import LinkButton from "../LinkButton";
import "./sidebar.css";

const SideBar = ({ selectedCand, selectedComp }) => {
  const { logout,body,setBody } = useContext(applicationContext);
  return (
    <div className="div-sideBar">
      <LinkButton content="Reports" linkTo="/admin_home/reports" />
      <LinkButton content="Create Report" linkTo="/admin_home/create_reports" />
      <h2>{selectedCand}</h2>
      <h2>{selectedComp}</h2>
      <button
        onClick={() => {
          logout();
          setBody({ ...body, password: "", email:"" });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
