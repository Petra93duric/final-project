import React, { useContext } from "react";
import "./candidate-report.css";
import moment from "moment";

const CandidateReport = ({ report,deleteReport }) => {
  return (
    <div className="div-candidateReport">
      <p>{report.companyName}</p>
      <p>{report.candidateName}</p>
      <p>{moment(report.interviewDate).format("mm/dd/yyyy")}</p>
      <p>{report.status}</p>
      <button onClick={()=>deleteReport(report.id)}>x</button>
    </div>
  );
};

export default CandidateReport;
