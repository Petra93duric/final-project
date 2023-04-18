import { Input } from "@mui/material";
import React from "react";
import SearchInput from "../SearchInput";
import "./wizard-step-3.css";

const WizardStep3 = ({
  back1ButtonClicked,
  setCreateReport,
  createReport,
  submit,
}) => {
  return (
    <div className="div-wizard-wrapper-third">
      <div>
      <input
        type="date"
        required
        onChange={(e) =>
          setCreateReport({ ...createReport, interviewDate: e.target.value })
        }
      />
      <select
        name="phase"
        id=""
        required
        onChange={(e) =>
          setCreateReport({ ...createReport, phase: e.target.value })
        }
      >
        <option value="">Select phase</option>
        <option value="CV">CV</option>
        <option value="HR">HR</option>
        <option value="Technical">Technical</option>
      </select>
      <select
        name=""
        id=""
        required
        onChange={(e) =>
          setCreateReport({ ...createReport, status: e.target.value })
        }
      >
        <option value="">Status</option>
        <option value="Passed">Passed</option>
        <option value="Declined">Declined</option>
      </select>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="20"
        required
        onChange={(e) =>
          setCreateReport({ ...createReport, note: e.target.value })
        }
      ></textarea>
      <button onClick={back1ButtonClicked}className="button-company back">Back</button>
      <button
      className="button-company submit"
        onClick={submit}
        disabled={
          createReport.interviewDate &&
          createReport.phase &&
          createReport.status &&
          createReport.note
            ? false
            : true
        }
      >
        Submit
      </button>
    </div>
  );
};

export default WizardStep3;
