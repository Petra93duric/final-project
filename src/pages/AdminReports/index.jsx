import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SearchInput from "../../components/SearchInput";
import "./admin-reports.css";

const AdminReports = () => {
  return (
    <div className="div-adminReports">
      <Header goBack="AdminHome" goToRoute={"/admin_home"} />
      <SideBar />
      <div className="wrapper-adminReports">
        <h2>Reports</h2>
        <SearchInput />
      </div>
      <Footer />
    </div>
  );
};

export default AdminReports;
