import React from 'react'
import "./candidate-info.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const CandidateInfo = () => {
  return (
    <div>
      <Header />
      <div className='wrapper-candidateInfo'>
        <h2>Candidate Info</h2>
        <img ></img>
        <div className='info-details'>

        </div>
        <h3>Reports</h3>

      </div>
      <Footer />
    </div>
  )
}

export default CandidateInfo