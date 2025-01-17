const apiKey = "008475c5dcd556a5432c4d6ccda06ea0"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert("City not found!");
    }
  } catch (error) {
    alert("Error fetching weather data.");
    console.error(error);
  }
}

function displayWeather(data) {
  document.getElementById("city-name").textContent = `City: ${data.name}`;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
