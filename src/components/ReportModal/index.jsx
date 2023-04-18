import React from "react";
import "./report-modal.css";

const ReportModal = ({ element }) => {
  return (
    <div className="div-modal">
      <h1>{element.candidateName}</h1>
      <div className="div-modal-info">
      <p>Company {element.companyName}</p>
      <p>Interview Date {element.interviewDate}</p>
      <p>Phase {element.phase}</p>
      <p>Status {element.status}</p>
      </div>
      <p className="div-modal-notes">Notes: {element.note}</p>
    </div>
  );
};

export default ReportModal;
