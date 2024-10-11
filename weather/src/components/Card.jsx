import React from 'react'
import { useweather } from '../context/Weather'
function Card() {
    const weather = useweather();
  return (
    <div className='card'>
        <img src={weather?.data?.current?.condition?.icon}/>
        <h3>{weather.data?.current?.temp_c}.C</h3>
        <h5>{weather.data?.location?.name},{weather.data?.location?.region}
            {""}{weather.data?.location?.country}</h5>
    </div>
  )
}

export default Card