import React, { useContext } from "react";
import "./candidate-report.css";
import moment from "moment";

const CandidateReport = ({ report, deleteReport, handleOpen }) => {
  return (
    <div className="div-candidateReport">
      <p>{report.companyName}</p>
      <p>{report.candidateName}</p>
      <p>{moment(report.interviewDate).format("DD/MM/YYYY")}</p>
      <p>{report.status}</p>
      <button
        className="button-admin-report"
        onClick={() => handleOpen(report)}
      >
        {" "}
        View
      </button>
      <button className="button-delete" onClick={() => deleteReport(report.id)}>
        X
      </button>
    </div>
  );
};

export default CandidateReport;
