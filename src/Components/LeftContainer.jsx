import React from "react";
import { WeatherData } from "./WeatherData";
import '../assets/styles/button.scss';

export const LeftContainer = () => {
  return (
    <div>
        <button type="button" className="button"><span>Search for places</span></button>
        <WeatherData/>
    </div>
  );
};
