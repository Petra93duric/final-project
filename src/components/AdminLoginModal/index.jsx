import React from "react";
import "./admin-login-modal.css";
import LinkButton from "../LinkButton";

const AdminLoginModal = () => {
  return (
    <div className="div-modal">
      <label htmlFor="">
      username
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        password
        <input type="password" name="" id="" />
      </label>

      <LinkButton content="LogIn" linkTo="/admin_home" />
    </div>
  );
};

export default AdminLoginModal;
