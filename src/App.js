import React, { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { ApplicationProvider } from "./context";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Candidates from "./pages/Candidates";
import CandidateInfo from "./pages/CandidateInfo";
import AdminHome from "./pages/AdminHome";
import AdminReports from "./pages/AdminReports";
import AdminCreateReports from "./pages/AdminCreateReports";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState("");
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const [freshData, setFreshData] = useState(false)
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("accessToken"))
  );

  const navigate = useNavigate();

  const logout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  const login = () => {
    navigate("/admin_home");
  };

  function fetchDataCandidates() {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
      });
  }
  function fetchDataReports() {
    fetch("http://localhost:3333/api/reports", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setReports(data);
      });
  }
  function fetchDataCompanies() {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
      });
  }
  function showClicked(input) {
    setValue(input);
  }
  useEffect(() => {
    fetchDataCandidates();
    fetchDataCompanies();
  }, []);
  useEffect(() => {
    fetchDataReports();
  }, [freshData]);

  return (
    <div className="App">
      <ApplicationProvider
        value={{
          candidates,
          reports,
          setReports,
          companies,
          showClicked,
          value,
          setBody,
          body,
          setAccessToken,
          accessToken,
          logout,
          login,
          setFreshData,
          freshData
        }}
      >
        {/* kada nemamo token */}
        {/* {token ? <Routes1 /> : <Router2 />} */}
        {accessToken ? (
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/candidates/:id" element={<CandidateInfo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </ApplicationProvider>
    </div>
  );
}

export default App;
