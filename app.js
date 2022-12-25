// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".location");
const notificationElement = document.querySelector(".notification");

// App data
const profile = {};

// weather.temperature = {
//     unit : "celsius"
// }

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";


// // CHECK IF BROWSER SUPPORTS GEOLOCATION
// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// // SET USER'S POSITION
// function setPosition(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
    
//     getWeather(latitude, longitude);
// }

// // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }

getWeather();

function strip(number)
{
    return (parseFloat(number).toPrecision(3));
}

// GET WEATHER FROM API PROVIDER
function getWeather(){
    let api = `https://api.genderize.io?name=alex&country_id=US`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            
            profile.name = data.name;
            profile.gender = data.gender;
            profile.probability = data.probability * 100;
            profile.count = data.count;

        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `Name : ${profile.name}`;
    tempElement.innerHTML = `Gender : ${profile.gender}`;
    descElement.innerHTML = `Odds : ${profile.probability}%`;
    locationElement.innerHTML = `Number of Occurences : ${profile.count}`;
}

// // C to F conversion
// function celsiusToFahrenheit(temperature){
//     return (temperature * 9/5) + 32;
// }

// // WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
// tempElement.addEventListener("click", function(){
//     if(weather.temperature.value === undefined) return;
    
//     if(weather.temperature.unit == "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
        
//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }else{
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// });

