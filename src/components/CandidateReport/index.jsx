import React, { useContext } from "react";
import "./candidate-report.css";
import moment from "moment";

const CandidateReport = ({ report }) => {
  return (
    <div className="div-candidateReport">
      <p>{report.companyName}</p>
      <p>{report.candidateName}</p>
      <p>{moment(report.interviewDate).format("mm/dd/yyyy")}</p>
      <p>{report.status}</p>
      <h2>X</h2>
    </div>
  );
};

export default CandidateReport;
