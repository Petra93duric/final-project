import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import "./admin-home.css";
import ReactCalendar from "../../components/ReactCalendar";
import VideoPlayer from "../../components/VideoPlayer";
import adminIcon from "../../assets/adminIcon.svg";

const AdminHome = () => {
  return (
    <div className="div-adminHome">
      <Header goBack="AdminHome" icon={adminIcon} />
      <SideBar />
      <div className="wrapper-adminHome">
        <ReactCalendar />

        <VideoPlayer />
      </div>
      <div className="iframe-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5661.857222916127!2d20.453705993339224!3d44.80264349432199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9a2ced4f1%3A0x74d75ca708001307!2sBelgrade%20Institue%20of%20Technology!5e0!3m2!1ssr!2srs!4v1681399677453!5m2!1ssr!2srs"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default AdminHome;
