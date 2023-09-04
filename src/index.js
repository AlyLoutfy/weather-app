import './assets/style.css';

async function getWeather(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=bfe56fdaa67647ad81f201951230808&q=${location}`);
  const weatherData = await response.json();

  return updateData(weatherData);
}

function updateData(data) {
  const condition = document.querySelector('.condition');
  const location = document.querySelector('.location');
  const temp = document.querySelector('.temp');
  const hum = document.querySelector('.hum-value');
  const wind = document.querySelector('.wind-value');
  const feels = document.querySelector('.feels-value');

  condition.innerHTML = data.current.condition.text;
  location.innerHTML = `${data.location.name}, ${data.location.country}`;
  temp.innerHTML = data.current.temp_c;
  hum.innerHTML = data.current.humidity;
  wind.innerHTML = data.current.wind_kph;
  feels.innerHTML = data.current.feelslike_c;
}

const searchBtn = document.querySelector('.search-btn');
const cityName = document.querySelector('.city');

searchBtn.addEventListener('click', () => { getWeather(cityName.value) });