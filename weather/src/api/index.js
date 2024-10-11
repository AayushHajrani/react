const bareurl = "https://api.weatherapi.com/v1/current.json?key=a06a94bc42ba4d25a0a35105240810"

export const getweatherapi = async (city)=>{
const response = await fetch (`${bareurl}&q=${city}&aqi=yes`)
return await response.json();
}