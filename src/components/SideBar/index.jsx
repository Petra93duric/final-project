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
      <div className="div-selected">
      <p>{selectedCand}</p>
      <p> {selectedComp}</p>
      </div>
      <button
      className="logout-button"
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
