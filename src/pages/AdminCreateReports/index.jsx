import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { applicationContext } from "../../context";
import "./admin-create-reports.css";
import WizardStep1 from "../../components/WizardStep1";
import WizardStep2 from "../../components/WizardStep2";
import WizardStep3 from "../../components/WizardStep3";
import { useNavigate } from "react-router-dom";
import adminIcon from "../../assets/adminIcon.svg"

const AdminCreateReports = () => {
  const { accessToken, setReports, reports,setFreshData,freshData } = useContext(applicationContext);
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
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function createNewReport() {
    fetch("http://localhost:3333/api/reports" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(createReport),
    })
      .then((res) => {
        if (res.ok) {
          // setReports(...reports,createReport)
          setFreshData(!freshData)
          navigate("/admin_home/reports");
        } else {
          throw new Error("nije proslo");
        }
      })
      .catch((e) => {
        setError(e.message);
      });

    // .then((data) => {
    //   navigate("/admin_home/reports");
    // });
  }

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
      <Header goBack="AdminHome" goToRoute={"/admin_home"} icon={adminIcon}/>

      <SideBar
        createReport={createReport}
        selectedCand={`Candidate > ${createReport?.candidateName}`}
        selectedComp={`Company > ${createReport?.companyName}`}
      />

      <div className="wrapper-adminCreateReports">
        <div className="wizard-title">
        <p className="first-step"  style={{borderBottom: (step == 0)?  "2px solid #ffdc60" : ""}}>Select Candidate &gt; </p>
        <p className="second-step"  style={{borderBottom: (step == 1)?  "2px solid #ffdc60" : ""}}>Select Company &gt; </p>
        <p className="third-step"  style={{borderBottom: (step == 2)?  "2px solid #ffdc60" : ""}}>Fill Report Details</p>
        </div>

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
              submit = {createNewReport}
              
            />
          )}
        </div>
        {/* {error ? "greska" : "nije greska"} */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminCreateReports;
