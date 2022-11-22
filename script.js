const API_KEY = 'K0TNJSRxnVYuWmnzFDRK57OXKpkdcBcw';

const inputElement = document.getElementById('city-input');
const buttonElement = document.getElementById('get-city-btn');
const weatherResultsEl = document.getElementById('weather-results');
const neighboursEl = document.getElementById('neighbours');

function renderWeather(allResults) {
  const [results, neighbours] = allResults;

  weatherResultsEl.innerHTML = '';
  neighboursEl.innerHTML = '';

  results.DailyForecasts.forEach((forecast) => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day-container');

    const dateElement = document.createElement('span');
    dateElement.classList.add('date');
    const date = new Date(forecast.Date);
    dateElement.innerText = `${date.getDate()}.${date.getMonth() + 1}`;

    const temperatureElement = document.createElement('span');
    temperatureElement.classList.add('temperature');
    temperatureElement.innerHTML = ` Low: ${forecast.Temperature.Minimum.Value}&#176 High: ${forecast.Temperature.Maximum.Value}&#176`;

    dayElement.appendChild(dateElement);
    dayElement.appendChild(temperatureElement);
    weatherResultsEl.appendChild(dayElement);
  });

  neighbours.forEach((neighbourCity) => {
    const cityButton = document.createElement('button');
    cityButton.innerText = neighbourCity.LocalizedName;
    cityButton.value = neighbourCity.Key;

    neighboursEl.appendChild(cityButton);
  });
}

async function getLocationKeyByCityName(cityName) {
  const citiesFromSearch = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search/?apikey=${API_KEY}&q=${cityName}`
  ).then((response) => {
    return response.json();
  });

  return citiesFromSearch[0].Key;
}

async function getWeather(locationKey) {
  const weatherResultsPromise = fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`
  ).then((response) => {
    return response.json();
  });

  const neighboursResultsPromise = fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/neighbors/${locationKey}?apikey=${API_KEY}`
  ).then((response) => {
    return response.json();
  });

  return await Promise.all([weatherResultsPromise, neighboursResultsPromise]);
}

function renderError() {
  weatherResultsEl.innerHTML = 'Something went wrong';
}

buttonElement.addEventListener('click', () => {
  const cityName = inputElement.value.toLowerCase();

  if (cityName) {
    getLocationKeyByCityName(cityName)
      .then(getWeather)
      .then(renderWeather)
      .catch(renderError);
  }
});

neighboursEl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const locationKey = event.target.value;
    const cityName = event.target.innerText;
    inputElement.value = cityName;

    getWeather(locationKey).then(renderWeather).catch(renderError);
  }
});
