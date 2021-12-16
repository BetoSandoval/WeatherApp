import React from "react";
import "../assets/styles/search.scss";

export const Search = () => {
  return (
    <>
      <div className="inpu-bar-container">
        <input type="text" className="input-bar" placeholder="Username" />
      </div>

      <button className="btn btn-primary button-search">Search</button>
    </>
  );
};
