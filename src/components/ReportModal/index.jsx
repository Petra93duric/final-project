import React from 'react'
import "./report-modal.css"

const ReportModal = ({element}) => {
  return (
    <div className='div-modal'>
      <p>{element.phase}</p>
    </div>
  )
}

export default ReportModal