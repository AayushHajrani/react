import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";
import { useweather } from "./context/Weather";

function App() {
  const weather = useweather();
  console.log(weather);

  return (
    <>
      <Input />
      <Button onClick={weather.fetchdata} value="Fetch" />
      <Card />
      <Button value="Refresh" />
    </>
  );
}

export default App;
