// Define the OpenWeatherMap API key and API URL
const apiKey = "f5a991661be402f51f840f833869a703";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Get the search box, search button, and weather icon elements from the HTML page
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check the weather for a given city
async function checkWeather(city) {
// Make an API call to OpenWeatherMap API to get weather data for the given city
const response = await fetch(apiUrl + city + '&appid=' + apiKey);
// If the API returns a 404 error, display an error message and hide the weather information
if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
} 
// If the API call is successful, display the weather information for the given city
else {
    var data = await response.json();

    // Display the city name, temperature, humidity, and wind speed for the given city
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Set the weather icon based on the weather condition of the given city
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    // Display the weather information and hide the error message
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

// Add an event listener to the search button to call the checkWeather function with the search box value
searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value)
});

// add comment to page check update  //