import React, {useContext} from "react";
import "./homepage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import { applicationContext } from '../../context'
import PartnerSection from '../../components/PartnerSection'



const HomePage = () => {

 
  return (
    <div className="div-homePage">
      <Header >
        <p>Petra</p>
      </Header>
      <div className="wrapper-home">
        <h1>MVP Cone</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
          illum perferendis expedita omnis excepturi unde debitis natus officia
          numquam sequi officiis ipsum voluptates minima quo architecto nihil,
          iure eveniet.
        </p>
        <LinkButton content="Get Started" linkTo="/candidates"/>
        <LinkButton content="Admin" linkTo="/admin_home" />
        <PartnerSection />
      </div>
      <img src="" alt="" />

      <Footer />
    </div>
  );
};

export default HomePage;
