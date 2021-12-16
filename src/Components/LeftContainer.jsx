import React, { useState } from "react";
import { WeatherData } from "./WeatherData";
import '../assets/styles/button.scss';
import { Search } from "./Search";

export const LeftContainer = () => {
  const [show, setShow] = useState(false);

  const handleSearchButton = () => {
    setShow(!show);
  }

  console.log(show);

  if(show){
    return(
      <Search/>
    );
  }else{
    return (
      <div>
         <button type="button" onClick={handleSearchButton} className="button"><span>Search for places</span></button>
         <WeatherData/>
     </div>
   );
  }
};
