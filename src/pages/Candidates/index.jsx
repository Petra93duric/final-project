import React, {useContext} from 'react'
import { applicationContext } from '../../context'
import "./candidates.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Toggle from '../../components/Toggle'
import SearchInput from '../../components/SearchInput'
import CandidateCard from '../../components/CandidateCard'


const Candidates = () => {
  const {candidates}=useContext(applicationContext)

  return (
    <div className='div-candidates'>
      <Header
      goBack="Candidates"
      />
      <div className='wrapper-candidates'>
      <Toggle />
      <h2>Candidates</h2>
      <SearchInput />
      {candidates.map((element)=>(
        <CandidateCard 
         candidate={element}
        />
      ))}

      </div>
      <Footer />
    </div>
  )
}

export default Candidates