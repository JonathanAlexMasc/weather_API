// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".location");
const notificationElement = document.querySelector(".notification");
const userInput = document.querySelector(".userInput");

let username;

document.getElementById("myButton").onclick = function getName()
{
    username = document.getElementById("myText").value;
    console.log(username);
    
    // App data
    const profile = {};
    getWeather();

    // GET WEATHER FROM API PROVIDER
    function getWeather(){
        
        let api = `https://api.genderize.io?name=${username}&country_id=US`;
        
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

}




