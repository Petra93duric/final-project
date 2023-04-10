import React, { useContext, useState } from "react";
import { applicationContext } from "../../context";
import "./search-input.css";

const SearchInput = () => {
  const { showClicked } = useContext(applicationContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          showClicked(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
