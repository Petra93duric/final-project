import React, { useContext, useState } from "react";
import { applicationContext } from "../../context";
import SearchInput from "../SearchInput";
import WizardFirstCard from "../WizardFirstCard";
import "./wizard-step-1.css";

const WizardStep1 = ({ nextButtonClicked, setCreateReport, createReport }) => {
  const { candidates, value } = useContext(applicationContext);
  const filtered = candidates.filter((char) =>
    char.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      <SearchInput />
      <div className="div-wizard-wrapper-first">
        {filtered &&
          filtered?.map((e) => (
            <WizardFirstCard
              setCreateReport={setCreateReport}
              candidate={e}
              createReport={createReport}
            />
          ))}
        <button onClick={nextButtonClicked} disabled={!createReport.candidateName ? true : false}>
          Next
        </button>
      </div>
    </div>
  );
};

export default WizardStep1;
