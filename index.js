const changeImage = document.querySelector(".cover")
const city = document.querySelector("#city")
const country = document.querySelector("#country")
const weatherIcon = document.querySelector("#weather-icon")
const weatherDesc = document.querySelector("#weather-description")
const weatherTemp = document.querySelector("#weather-temperature")
const humidityData = document.querySelector("#data-humidity")
const pressureData = document.querySelector("#data-pressure")
const windData = document.querySelector("#data-wind")
const cityInput = document.querySelector("#input-city")
const btnSearch = document.querySelector("#btn-search")
const form = document.querySelector(".search");  
const hour = document.querySelector(".date__hour");  
const today = document.querySelector(".date__today");  

form.addEventListener('submit',addWeather)

const formatHour = (date) => {
  const hours = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  return hours 
}
const formatDay = (date) => {
  const today = date.toLocaleString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
  return today 
}

setInterval(() => {
  const date = new Date()
  hour.innerHTML = formatHour(date);
  today.innerHTML = formatDay(date);
}, 2000)

