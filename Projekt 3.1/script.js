const KELVIN= 273;
const key= '3fe857ce3e9c56a1d1ac96c0e69e975a';

// function getWeather(latitude, longitude){
//     let api= `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

//     fetch(api).then(function(response){
//         let data = response.json();
//         return data;
//     })

//     .then(function(data){
//         weather.temperature.value= Math.floor(data.main.temp - KELVIN);
//         weather.description = data.weather[0].description;
//         weather.iconId = data.weather[0].icon;
//         weather.city = data.name;
//         weather.country = data.sys.country;
//     })

//     .then
// }

//SELECTED ITEMS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".weather-icon");
const notificationElement = document.querySelector(".weather-icon");
