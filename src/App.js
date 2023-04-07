import React, {  useEffect, useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { ApplicationProvider } from "./context";
import { Route, Routes } from "react-router-dom";
import Candidates from "./pages/Candidates";
import CandidateInfo from "./pages/CandidateInfo";
import AdminHome from "./pages/AdminHome";
import AdminReports from "./pages/AdminReports";
import AdminCreateReports from "./pages/AdminCreateReports";

function App() {
const [candidates, setCandidates]= useState([])
const [reports, setReports]= useState([])

  function fetchDataCandidates() {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCandidates(data)
      });
  }
  function fetchDataReports() {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReports(data)
      });
  }
  useEffect(() => {
    fetchDataCandidates();
    fetchDataReports()
  }, []);
  return (
    <div className="App">
      <ApplicationProvider value={{candidates, reports}} >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<CandidateInfo />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route path="/admin_home/reports" element={<AdminReports />} />
          <Route
            path="/admin_home/create_reports"
            element={<AdminCreateReports />}
          />
        </Routes>
      </ApplicationProvider>
    </div>
  );
}

export default App;
