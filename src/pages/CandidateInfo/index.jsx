import React, { useContext, useState } from "react";
import "./candidate-info.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { applicationContext } from "../../context";
import { useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import ReportModal from "../../components/ReportModal";

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
      <Header goToRoute="/candidates" goBack="Candidates" />
      <div className="wrapper-candidateInfo">
        <h2>Candidate Info</h2>
        <img src={`${candidate?.avatar}`} alt="candidate" />
        <div className="info-details">
          <p>{candidate?.name}</p>
          <p>{candidate?.email}</p>
          <p>{candidate?.birthday}</p>
          <p>{candidate?.education}</p>
        </div>
        <h3>Reports</h3>
        {candidateReports?.map((element, i) => {
          return (
            <div>
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
