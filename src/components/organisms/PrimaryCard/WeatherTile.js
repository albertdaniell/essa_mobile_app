import React from "react";
import "./PrimaryCard.css";

function WeatherTile({ children, style, color, className }) {
  return (
    <div
      className={className}
      style={{ ...style }}
      id="WeatherTile"
    >
      {children}
    </div>
  );
}

export default WeatherTile;
