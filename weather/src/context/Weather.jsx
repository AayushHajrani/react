import { createContext, useContext, useState } from "react";
import { getweatherapi } from "../api";


const weather = createContext();

export const useweather = () => {
  return useContext(weather);
};

export const Weatherprovider = (props) => {
  const [data, setdata] = useState(null);
  const [city, setcity] = useState("");

  const fetchdata = async () => {
    const response = await getweatherapi(city);
    setdata(response);
  };

  return (
    <weather.Provider value={{ city, data, setcity, fetchdata }}>
      {props.children}
    </weather.Provider>
  );
};
