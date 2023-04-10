import React from "react";
import "./report-modal.css";

const ReportModal = ({ element }) => {
  return (
    <div className="div-modal">
      <p>{element.candidateName}</p>
      <p>Company {element.companyName}</p>
      <p>X</p>
      <p>Interview Date {element.interviewDate}</p>
      <p>Phase {element.phase}</p>
      <p>Status {element.status}</p>
      <p>Notes {element.note}</p>
    </div>
  );
};

export default ReportModal;
