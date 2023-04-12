import { Input } from "@mui/material";
import React from "react";
import SearchInput from "../SearchInput";
import "./wizard-step-3.css";

const WizardStep3 = ({ back1ButtonClicked, setCreateReport, createReport }) => {
  return (
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
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="30"
        required
        onChange={(e) =>
          setCreateReport({ ...createReport, note: e.target.value })
        }
      ></textarea>
      <button onClick={back1ButtonClicked}>Back</button>
      <button>Submit</button>
    </div>
  );
};

export default WizardStep3;
