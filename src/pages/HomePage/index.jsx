import React, {useState} from "react";
import "./homepage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import { applicationContext } from '../../context'
import PartnerSection from '../../components/PartnerSection'
import Modal from "@mui/material/Modal";
import ReportModal from "../../components/ReportModal";
import AdminLoginModal from "../../components/AdminLoginModal"





const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [clickedModal, setClickedModal] = useState(null);
  const handleOpen = () => {
    setOpen(true);
    setClickedModal();
  };
  const handleClose = () => setOpen(false);

 
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
        <button onClick={() => handleOpen()}>Admin</button>
        <Modal open={open} onClose={handleClose}>
          <div>
            <AdminLoginModal element ={clickedModal} />
          </div>
        </Modal>
        
        <PartnerSection />
      </div>
      <img src="" alt="" />

      <Footer />
    </div>
  );
};

export default HomePage;
