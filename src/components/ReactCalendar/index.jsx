import React, { useState } from "react";
import "./react-calendar.css"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
  
    const onChange = (date) => {
      setDate(date);
    };
  
    return (
      <>
        <div className="div-calendar">
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="elfsight-app-0644d062-ef46-4121-bab0-7a61a4a246c8"></div>
      </>
    );
  };

  export default ReactCalendar