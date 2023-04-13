import React, { useContext } from "react";
import "./header.css";
import DarkLight from "../DarkLight";
import LinkButton from "../LinkButton";
import { Link } from "react-router-dom";
import HomeImg from "../../assets/house.svg";

const Header = ({ goBack, goToRoute, icon }) => {
  return (
    <div className="div-header">
      <h1>MVP Cone</h1>
      <div className="div-nav">
        <img src={HomeImg} alt="" className="homeIcon" />
        <LinkButton content=" Home" linkTo={"/"} />
        <img src={icon} alt="" className="homeIcon" />
        <Link to={goToRoute}>
          <p> {goBack} </p>
        </Link>
        {/* <LinkButton content={} linkTo={"/"}/> */}

        <DarkLight />
      </div>
    </div>
  );
};

export default Header;
