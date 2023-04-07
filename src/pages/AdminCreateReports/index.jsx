import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import SearchInput from "../../components/SearchInput";
import "./admin-create-reports.css";

const AdminCreateReports = () => {
  return (
    <div className="div-adminCreateReports">
      <Header goBack="AdminHome" goToRoute={"/admin_home"} />
      <SideBar />
      <div className="wrapper-adminCreateReports">
        <h2>Create</h2>
        <SearchInput />
      </div>
      <Footer />
    </div>
  );
};

export default AdminCreateReports;
