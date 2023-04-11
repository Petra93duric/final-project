import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { applicationContext } from '../../context'
import "./candidate-card.css"

const CandidateCard = ({candidate}) => {
  const {candidates}=useContext(applicationContext)
  return (
    <div className='div-candidateCard'>
    <Link to={`/candidates/${candidate.id}`}>
    <div className='div-candidateCard'>
      <img src={`${candidate?.avatar}`} alt="" />
      <div>
      <p>{candidate.name}</p>
      <p>{candidate.email}</p>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default CandidateCard