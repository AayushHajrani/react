import React from "react";
import { useweather } from "../context/Weather";

function Input() {
  const weather = useweather();
  return (
    <div>
      <input
        className="input"
        placeholder="search here"
        value={weather.city}
        onChange={(e) => weather.setcity(e.target.value)}
      />
    </div>
  );
}

export default Input;
