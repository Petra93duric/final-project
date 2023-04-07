import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./link-button.css"

const LinkButton = ({content,linkTo}) => {


  return (
    <Link to={linkTo}> <p> {content} </p> </Link>
  )
}

export default LinkButton