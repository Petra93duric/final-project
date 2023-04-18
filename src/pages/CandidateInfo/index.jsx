import React, { useContext, useState } from "react";
import "./candidate-info.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { applicationContext } from "../../context";
import { useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import ReportModal from "../../components/ReportModal";
import moment from "moment/moment";
import candidatesIcon from "../../assets/candidatesIcon.svg"

const CandidateInfo = () => {
  const { candidates, reports } = useContext(applicationContext);
  const { id } = useParams();
  const candidate = candidates.find((e) => e.id == id);
  const candidateReports = reports.filter((e) => e.candidateId == id);
  const [open, setOpen] = React.useState(false);
  const [clickedModal, setClickedModal] = useState(null);
  const handleOpen = (element) => {
    setOpen(true);
    setClickedModal(element);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="div-candidateInfo">
      <Header goToRoute="/candidates" goBack="Candidates" icon={candidatesIcon} />
      <div className="wrapper-candidateInfo">
        <h2>Candidate Info</h2>
        <div className="div-candidateInfoContent">
          <img src={`${candidate?.avatar}`} alt="candidate" />
          <div className="info-details">
            <p>Name: {candidate?.name}</p>
            <p>Email: {candidate?.email}</p>
            <p>Date of Birth: {moment(candidate?.birthday).format("DD/MM/YYYY")}</p>
            {/* {moment(report.interviewDate).format("mm/dd/yyyy")} */}
            <p>Education: {candidate?.education}</p>
          </div>
        </div>
        <div className="titles-candidate-info">
          <h3>Company Name</h3>
          <h3>Interview Date</h3>
          <h3> Status</h3>
          <h3 className="title-report">Reports</h3>

        </div>
        {candidateReports?.map((element, i) => {
          return (
            <div className="mapped-reports">
              <p>{element.companyName}</p>
              <p>{element.interviewDate}</p>
              <p>{element.status}</p>
              <button onClick={() => handleOpen(element)}>Click</button>
            </div>
          );
        })}
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

export default CandidateInfo;
