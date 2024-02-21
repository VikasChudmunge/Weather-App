const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_Img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
	const api_key = "008475c5dcd556a5432c4d6ccda06ea0";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	

	const weather_data = await fetch(`${url}`).then(response => response.json());

	if(weather_data.cod === `404`){
		console.log('error') 
		return
	}

	temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

	description.innerHTML = `${weather_data.weather[0].description}`;

	humidity.innerHTML = `${weather_data.main.humidity}%`;

	wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weather_Img.src = "./images/cloud1-removebg-preview.png";
			break;
		case 'Clear':
			weather_Img.src = "./images/clear1-PhotoRoom.png-PhotoRoom.png";
			break;

		case 'Rain':
			weather_Img.src = "./images/rain1_prev_ui.png";
			break;

		case 'Mist':
			weather_Img.src = "./images/mist1.png";
			break;

		case 'Snow':
			weather_Img.src = "./images/snow1_prev_ui.png";
			break;

	}
	console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
	checkWeather(inputBox.value)
});


