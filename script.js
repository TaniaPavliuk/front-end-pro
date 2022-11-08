const API_KEY = 'StAXM2VmTgFtwElaUDbGu5uzTNCXS5tH';

const cities = {
  Kyiv: '324505',
  Lviv: '324561',
  Kharkiv: '323903',
  Chernihiv: '322162',
  Poltava: '325523',
  Zhytomyr: '326609',
  Cherkasy: '321985',
  Odesa: '325343',
  Mariupol: '323037',
  London: '328328',
  Warsaw: '274663',
  ['New York']: '349727',
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
  const cityName = inputElement.value;
  const cityCode = cities[cityName];
  if (cityCode) {
    getWeather(cityCode);
  } else {
    weatherResults.innerText = 'No weather for this city';
  }
});
