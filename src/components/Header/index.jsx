import React,{useContext}from 'react'
import "./header.css"
import DarkLight from '../DarkLight'
import LinkButton from '../LinkButton'
import { Link } from 'react-router-dom'
import { applicationContext } from '../../context'


const Header = ({goBack,goToRoute}) => {
 

  return (
    <div className='div-header'>
      <h1>MVP Cone</h1>
      <LinkButton content="Home" linkTo={"/"}/>
      <Link to={goToRoute} ><p> { goBack} </p></Link> 
      {/* <LinkButton content={} linkTo={"/"}/> */}


      <DarkLight/>
    </div>
  )
}

export default Header