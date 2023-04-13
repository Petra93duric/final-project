import React, { useContext, useState } from "react";
import { applicationContext } from "../../context";
import loupeImg from "../../assets/loupe.svg"
import "./search-input.css";

const SearchInput = () => {
  const { showClicked } = useContext(applicationContext);

  return (
    <div className="div-searchInput">
      <input
        type="text"
        placeholder="Search..."
        onInput={(e) => {
          showClicked(e.target.value);
        }}
      />
        <img src={loupeImg} alt="" />
    </div>
  );
};

export default SearchInput;
