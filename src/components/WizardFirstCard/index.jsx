import React from "react";
import SearchInput from "../SearchInput";
import "./wizard-first.css";

const WizardFirstCard = ({ candidate, setCreateReport, createReport }) => {
  return (
    <div className="wizard-first-card-div">
      <div
        className="div-candidateCard"
        onClick={() =>
          setCreateReport({
            ...createReport,
            candidateName: candidate.name,
            candidateId: candidate.id,
          })
        }
      >
        <img src={`${candidate?.avatar}`} alt="" />
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </div>
  );
};

export default WizardFirstCard;
