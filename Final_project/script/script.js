const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=07407eccd051a7a7b4fc81e187f47771';



async function apiFetch(){
	try{
		const response =await fetch(apiURL);
		if(Response.ok) {
			const data = await response.json();
			displayResults(data);

		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(weatherData){
	currentTemp.textContent = weatherData.main.temp.toFixed(0);

	const imagesrc = 'https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png';
	const desc = weatherData.weather[0].description;
	weatherIcon.setAttribute('src', imagesrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.innerHTML = desc;
}



apiFetch();