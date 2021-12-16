import React from "react";
import Button from "./Button";
import { WeatherData } from "./WeatherData";

export const LeftContainer = () => {
  return (
    <div>
      <>
        <Button/>
        <WeatherData/>
      </>
    </div>
  );
};
