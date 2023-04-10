import React from "react";
import "./wizard-two.css";

const WizardSecondCard = ({ company, setCreateReport, createReport }) => {
  return (
    
      <div
        className="div-candidateCard"
        onClick={() =>
          setCreateReport({
            ...createReport,
            companyId: company.id,
            companyName: company.name,
          })
        }
      >
        <p >{company.name}</p>
      </div>
   
  );
};

export default WizardSecondCard;
