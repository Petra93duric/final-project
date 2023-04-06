import React from 'react'
import "./homepage.css"
import { ApplicationProvider } from '../../context';
import { Route, Routes } from "react-router-dom";
import Candidates from '../Candidates';
import CandidateInfo from '../CandidateInfo';
import AdminCreateReports from '../AdminCreateReports';
import AdminHome from '../AdminHome';
import AdminReports from '../AdminReports';

const HomePage = () => {
  return (
    <ApplicationProvider>
      <div>HomePage</div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/candidates" element={<Candidates />}>
          <Route path=":id" element={<CandidateInfo />} />
        </Route>
        <Route path="/admin_home" element={<AdminHome />}>
          <Route path="reports" element={<AdminReports />} />
          <Route path="create_reports" element={<AdminCreateReports />} />
        </Route>
      </Routes>
    </ApplicationProvider>
  );
};

export default HomePage;