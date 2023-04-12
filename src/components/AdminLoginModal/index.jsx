import React, { useContext, useEffect, useState } from "react";
import "./admin-login-modal.css";
import { applicationContext } from "../../context";

const AdminLoginModal = () => {
  const { body, setBody, setAccessToken, accessToken, login } =
    useContext(applicationContext);

  const getThatAccessToken = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json().catch((e) => console.log(e)))
      .then((data) => {
        setAccessToken(data?.accessToken);
        if (data?.accessToken) {
          localStorage.setItem(
            "accessToken",
            JSON.stringify(data?.accessToken)
          );
          login();
        }
      });
  };
  return (
    <div className="div-modal-login">
      <label htmlFor="">
        Email
        <input
          type="text"
          onInput={(e) => {
            setBody({ ...body, email: e.target.value });
          }}
          value={body.email}
        />
      </label>
      <br />
      <label htmlFor="">
        Password
        <input
          type="password"
          name=""
          id=""
          onInput={(e) => {
            setBody({ ...body, password: e.target.value });
          }}
          value={body.password}
        />
      </label>

      <button
        onClick={() => {
          getThatAccessToken();
          
        }}
      >
        Login
      </button>
    </div>
  );
};

export default AdminLoginModal;
