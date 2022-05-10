async function addWeather(e) {
  e.preventDefault();
  const { main, weather, name, sys, wind } = await getData(cityInput.value);
  let process = 0;
  city.innerHTML = name;
  country.innerHTML = sys.country

  let iconSrc = "./src/icons/{icon}.png";
  iconSrc = iconSrc.replace("{icon}", weather[0].icon);
  weatherIcon.src = iconSrc;
  weatherDesc.innerHTML = weather[0].description;

  process = `${Math.round(main.temp)}°`;
  weatherTemp.querySelector('.temperature__item').innerHTML = process;

  process = `Min: ${Math.round(main.temp_min)}° / Max: ${Math.round(main.temp_max)}°`;
  weatherTemp.querySelector(".temperature__max-min").innerHTML = process;
  
  humidityData.innerHTML = main.humidity
  windData.innerHTML = wind.speed
  pressureData.innerHTML = main.pressure;

  addBackground(`${cityInput.value}`)
  cityInput.innerHTML=""
}

function clean(){
  inputCity.value = ""
  section.innerHTML = ""
}

