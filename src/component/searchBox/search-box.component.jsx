import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, searchHandler }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={searchHandler}
      />
    </div>
  );
};
