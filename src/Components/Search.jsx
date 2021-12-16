import React from "react";
import "../assets/styles/search.scss";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <>
      <div className="inpu-bar-container">
        <AiOutlineSearch className="lens"/>
        <input type="text" className="input-bar" placeholder="Username" />
      </div>

      <button className="btn btn-primary button-search">Search</button>
    </>
  );
};
