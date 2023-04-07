import React from 'react'
import "./candidates.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Toggle from '../../components/Toggle'
import SearchInput from '../../components/SearchInput'
import CandidateCard from '../../components/CandidateCard'

const Candidates = () => {
  return (
    <div className='div-candidates'>
      <Header />
      <div className='wrapper-candidates'>
      <Toggle />
      <h2>Candidates</h2>
      <SearchInput />


      </div>
      <Footer />
    </div>
  )
}

export default Candidates