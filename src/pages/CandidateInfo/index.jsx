import React, {useContext} from 'react'
import "./candidate-info.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { applicationContext } from '../../context'
import { useParams } from 'react-router-dom'


const CandidateInfo = () => {
  const {candidates, reports}=useContext(applicationContext)
  const {id}= useParams()
  const candidate=candidates.find(e => e.id == id)
  const report=reports.find(e=>  e.id == id)
  


  return (
    <div className='div-candidateInfo'>
      <Header 
      goToRoute="/candidates"
      goBack="Candidates"
       />
      <div className='wrapper-candidateInfo'>
        <h2>Candidate Info</h2>
        <img src={`${candidate?.avatar}`} />
        <div className='info-details'>
        <p>{candidate?.name}</p>
        <p>{candidate?.email}</p>
        <p>{candidate?.birthday}</p>
        <p>{candidate?.education}</p>




        </div>
        <h3>Reports</h3>
         {report?.map((element)=>{
          <div>
            <p>{element.phase}</p>
          </div>
         }
         )}

      </div>
      <Footer />
    </div>
  )
}

export default CandidateInfo