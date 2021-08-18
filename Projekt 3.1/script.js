//SELECTED ITEMS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".weather-icon");
const notificationElement = document.querySelector(".weather-icon");

//App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// App const and vars
const KELVIN = 273; 
//Api Key
const key= '3fe857ce3e9c56a1d1ac96c0e69e975a';

//Check if browser supports geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

//Set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Show error when there is an issue with geolocation service
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p> ${error.message} </p>";
}

//Get weather from api provider 
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })

    .then(function(data){   
        weather.temperature.value= Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].icon;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })

    .then (function(){
        displayWeather();
    });
}

// Display weather function 
function displayWeather(){
    iconElement.innerHTML = '<img src="icons/${weather.iconId}.png"/>';
    tempElement.innerHTML = '${weather.temperature.value}°<span>C</span>';
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = '${weather.city}, ${weather.country}';
}