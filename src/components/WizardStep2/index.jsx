import React, { useContext, useState } from 'react'
import { applicationContext } from "../../context";
import SearchInput from '../SearchInput'
import WizardSecondCard from '../WizardSecondCard';
import "./wizard-step-2.css"

const WizardStep2 = ({next2ButtonClicked,backButtonClicked,setCreateReport, createReport }) => {
  const { companies, value } = useContext(applicationContext);
  const filtered = companies.filter(char=>char.name.toLowerCase().includes(value.toLowerCase()))

  

  return (
    <div>
      <SearchInput />
      <div>
        {filtered && filtered?.map((e) =>(
          <WizardSecondCard
          company={e}
          setCreateReport={setCreateReport}
          createReport={createReport}
          />
          ))}
          <button onClick={backButtonClicked} className="button-company">Back</button>
          <button onClick={next2ButtonClicked} disabled={!createReport.companyName ? true : false} className="button-company">Next</button>
      </div>
    </div>
  )
}

export default WizardStep2