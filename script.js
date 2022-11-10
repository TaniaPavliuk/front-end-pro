const API_KEY = 'StAXM2VmTgFtwElaUDbGu5uzTNCXS5tH';

const cities = {
  kyiv: '324505',
  lviv: '324561',
  kharkiv: '323903',
  chernihiv: '322162',
  poltava: '325523',
  zhytomyr: '326609',
  cherkasy: '321985',
  odesa: '325343',
  mariupol: '323037',
  london: '328328',
  warsaw: '274663',
  ['new york']: '349727',
};

const weatherResults = document.getElementById('weather-results');

function renderWeather(results) {
  weatherResults.innerHTML = '';

  results.DailyForecasts.forEach((forecast) => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day-container');

    const dateElement = document.createElement('span');
    dateElement.classList.add('date');
    const date = new Date(forecast.Date);
    dateElement.innerText = `${date.getDate()}.${date.getMonth()}`;

    const temperatureElement = document.createElement('span');
    temperatureElement.classList.add('temperature');
    temperatureElement.innerHTML = ` Low: ${forecast.Temperature.Minimum.Value}&#176 High: ${forecast.Temperature.Maximum.Value}&#176`;

    dayElement.appendChild(dateElement);
    dayElement.appendChild(temperatureElement);
    weatherResults.appendChild(dayElement);
  });
}

function getWeather(cityCode) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', () => {
    renderWeather(JSON.parse(xhr.response));
  });

  xhr.open(
    'GET',
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${API_KEY}&metric=true`
  );
  xhr.send();
}

const inputElement = document.getElementById('city-input');
const buttonElement = document.getElementById('get-city-btn');
buttonElement.addEventListener('click', () => {
  const cityName = inputElement.value.toLowerCase();
  const cityCode = cities[cityName];
  if (cityCode) {
    getWeather(cityCode);
  } else {
    weatherResults.innerText = 'No weather for this city';
  }
});
