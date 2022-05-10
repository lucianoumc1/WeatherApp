let url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";
const API_KEY = "2ba3ffaf655e63ec7e17b68208b72387";

const getData = async (city) => {
  
  try {
   let send = url.replace("{city name}", city);
    send = send.replace("{API key}", API_KEY);
    console.log(send)

    const dataJson = await (await fetch(send)).json();

    return dataJson;
  } 
  catch (error) {
    console.error(error.message);
  }
}
