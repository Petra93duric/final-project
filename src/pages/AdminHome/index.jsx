import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import "./admin-home.css";

const AdminHome = () => {
  return (
    <div className="div-adminHome">
      <Header goBack="AdminHome" />
      <SideBar />
      <div className="wrapper-adminHome"></div>

      <Footer />
      
    </div>
  );
};

export default AdminHome;
