import React, { useContext, useState } from "react";
import { applicationContext } from "../../context";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SearchInput from "../../components/SearchInput";
import "./admin-reports.css";
import CandidateReport from "../../components/CandidateReport";
import Modal from "@mui/material/Modal";
import ReportModal from "../../components/ReportModal";
import adminIcon from "../../assets/adminIcon.svg"

const AdminReports = () => {
  const { reports, value, accessToken, createReport, freshData, setFreshData } =
    useContext(applicationContext);
  const [clickedModal, setClickedModal] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (element) => {
    setOpen(true);
    setClickedModal(element);
  };
  const handleClose = () => setOpen(false);
  const filteredReports = reports?.filter(
    (rep) =>
      rep.companyName.toLowerCase().includes(value.toLowerCase()) ||
      rep.candidateName.toLowerCase().includes(value.toLowerCase())
  );

  function deleteReport(id) {
    fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(createReport),
    }).then(() => {
      setFreshData(!freshData);
    });
  }
  return (
    <div className="div-adminReports">
      <Header goBack="AdminHome" goToRoute={"/admin_home"} icon={adminIcon}/>
      <SideBar />
      <div className="wrapper-adminReports">
        <h2>Reports</h2>
        <SearchInput />
        {filteredReports &&
          filteredReports?.map((element) => (
            <>
              <CandidateReport report={element} deleteReport={deleteReport} handleOpen={handleOpen} />
      
            </>
          ))}
        <Modal open={open} onClose={handleClose}>
          <div>
            <ReportModal element={clickedModal} />
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default AdminReports;
