import React, { useState } from "react";
import SearchBar from "./SearchBar";

const SearchContainer = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(true);
  };

  console.log(show);

  return (
    <>
      {show ? (
        <SearchBar />
      ) : (
        <button type="button" class="btn btn-secondary" onClick={handleMenu}>
          Search for places
        </button>
      )}
    </>
  );
};

export default SearchContainer;
