import React, { useContext, useEffect, useState } from "react";
import { applicationContext } from "../../context";
import "./candidates.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchInput from "../../components/SearchInput";
import CandidateCard from "../../components/CandidateCard";
import candidatesIcon from "../../assets/candidatesIcon.svg"

const Candidates = () => {
  const { candidates, value } = useContext(applicationContext);
  const filtered = candidates.filter((char) =>
  char.name.toLowerCase().includes(value.toLowerCase())
  );
  const [candidatesToggle,setCandidatesToggle] = useState(sessionStorage.getItem("candidatesToggle") || "box")
  useEffect(() =>{
    sessionStorage.setItem("candidatesToggle", candidatesToggle)
    document.body.className = candidatesToggle;
  },[candidatesToggle])
  
  function toggleCandidates(){
    if( candidatesToggle == "box"){
      setCandidatesToggle( "rows" );
      // sessionStorage.setItem("candidatesToggle", {candidatesToggle})
    }else{ setCandidatesToggle( "box" )}
  }
  

  return (
    <div className="div-candidates">
      <Header goBack="Candidates" icon={candidatesIcon}/>
      <div className={`wrapper-candidates`}>
        <p onClick={toggleCandidates}>| | | |</p>
        <h2>Candidates</h2>
        <SearchInput />
        <div className={`div-cardwrapper ${candidatesToggle}`}>
          {filtered &&
            filtered?.map((element) => <CandidateCard candidate={element} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Candidates;
