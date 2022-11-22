const API_KEY = 'b6ad49d4';
const RESULTS_PER_PAGE = 10;

let currentSearchValue = '';
let currentPage = 1;
let currentResults = [];

const searchInputEl = document.getElementById('search-input');
const inputBtnEl = document.getElementById('input-button');
const movieListEl = document.getElementById('movie-list');
const paginationEl = document.getElementById('pagination');
const detailsEl = document.getElementById('details');
const containerEl = document.getElementsByClassName('container')[0];

function renderError(data) {
  movieListEl.innerHTML = '';
  paginationEl.innerHTML = '';

  movieListEl.innerText = data.Error;
}

function renderResults(data) {
  movieListEl.innerHTML = '';
  detailsEl.innerHTML = '';

  data.Search.forEach((movie) => {
    const itemEl = document.createElement('li');
    const itemTitleEl = document.createElement('p');
    const itemMoreBtnEl = document.createElement('a');

    itemTitleEl.innerText = movie.Title;
    itemMoreBtnEl.innerText = 'More';
    itemMoreBtnEl.value = movie;

    itemEl.appendChild(itemTitleEl);
    itemEl.appendChild(itemMoreBtnEl);

    movieListEl.appendChild(itemEl);
  });
  const pages = Math.ceil(Number(data.totalResults) / RESULTS_PER_PAGE);

  paginationEl.innerHTML = '';
  for (let i = 1; i <= pages; i++) {
    const pageButtonEl = document.createElement('button');

    pageButtonEl.innerText = i;
    pageButtonEl.value = i;

    paginationEl.appendChild(pageButtonEl);
  }
}

function showDetails() {
  detailsEl.classList.add('visible');
}

function hideDetails() {
  detailsEl.classList.remove('visible');
}

function renderDetails(details) {
  showDetails();
  detailsEl.innerHTML = '';

  const titleEl = document.createElement('p');
  titleEl.innerText = `${details.Title} - ${details.Year}`;
  detailsEl.appendChild(titleEl);

  if (details.Poster === 'N/A') {
    const picturePlaceholderEl = document.createElement('p');
    picturePlaceholderEl.innerText = 'No picture for this movie';
    detailsEl.appendChild(picturePlaceholderEl);
  } else {
    const posterEl = document.createElement('img');
    posterEl.src = details.Poster;
    detailsEl.appendChild(posterEl);
  }
}

movieListEl.addEventListener('click', (event) => {
  const { tagName, value } = event.target;

  if (tagName === 'A') {
    renderDetails(value);
  }
});

paginationEl.addEventListener('click', (event) => {
  const { tagName, value } = event.target;
  if (tagName === 'BUTTON') {
    hideDetails();
    getMovie(currentSearchValue, value).then(handleResponse);
  }
});

async function getMovie(movieToFind, page = 1) {
  let response;

  try {
    response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: API_KEY,
        s: movieToFind,
        page,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return response.data;
}

function handleResponse(data) {
  containerEl.classList.add('visible');

  if (data.Response === 'True') {
    renderResults(data);
  } else {
    renderError(data);
  }
}

inputBtnEl.addEventListener('click', () => {
  const searchValue = searchInputEl.value;
  if (searchValue) {
    currentSearchValue = searchValue;
    hideDetails();
    getMovie(searchValue).then(handleResponse);
  }
});
