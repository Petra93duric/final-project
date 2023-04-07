import React from 'react'
import "./header.css"
import DarkLight from '../DarkLight'
import LinkButton from '../LinkButton'

const Header = () => {
  return (
    <div className='div-header'>
      <h1>MVP Cone</h1>
      <LinkButton content="Home" linkTo={"/"}/>
      {/* <LinkButton content={} linkTo={"/"}/> */}


      <DarkLight/>
    </div>
  )
}

export default Header