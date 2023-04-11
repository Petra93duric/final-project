import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./link-button.css";

const LinkButton = ({ content, linkTo, setAccessToken }) => {
  return (
    <div className="div-linkToButton">
      <Link to={linkTo}>
        <p> {content} </p>
      </Link>
    </div>
  );
};

export default LinkButton;
