import React, { useContext, useState } from "react";
import { applicationContext } from "../../context";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import SearchInput from "../../components/SearchInput";
import "./admin-create-reports.css";
import WizardStep1 from "../../components/WizardStep1";
import WizardStep2 from "../../components/WizardStep2";
import WizardStep3 from "../../components/WizardStep3";

const AdminCreateReports = () => {
  const [step, setStep] = useState(0);
  const [createReport, setCreateReport] = useState({
    candidateId: "",
    candidateName: "",
    companyId: "",
    companyName: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });
  function nextButtonClicked() {
    setStep(1);
  }
  function next2ButtonClicked() {
    setStep(2);
  }
  function backButtonClicked() {
    setStep(0);
  }
  function back1ButtonClicked() {
    setStep(1);
  }

  return (
    <div className="div-adminCreateReports">
      <Header goBack="AdminHome" goToRoute={"/admin_home"} />
      <SideBar
        createReport={createReport}
        selectedCand={`Candidate: ${createReport?.candidateName}`}
        selectedComp={`Company: ${createReport?.companyName}`}
      />
      <div className="wrapper-adminCreateReports">
        <p onClick={backButtonClicked}>Select Candidate --- </p>
        <p onClick={nextButtonClicked}>Select Company --- </p>
        <p onClick={next2ButtonClicked}>Fill Report Details</p>

        <div className="div-wizard">
          {step === 0 && (
            <WizardStep1
              nextButtonClicked={nextButtonClicked}
              setCreateReport={setCreateReport}
              createReport={createReport}
            />
          )}
          {step === 1 && (
            <WizardStep2
              next2ButtonClicked={next2ButtonClicked}
              backButtonClicked={backButtonClicked}
              setCreateReport={setCreateReport}
              createReport={createReport}
            />
          )}
          {step === 2 && (
            <WizardStep3
              back1ButtonClicked={back1ButtonClicked}
              setCreateReport={setCreateReport}
              createReport={createReport}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCreateReports;
