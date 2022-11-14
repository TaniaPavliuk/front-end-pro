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

    itemMoreBtnEl.addEventListener('click', () => {
      const titleEl = document.createElement('p');
      const posterEl = document.createElement('img');

      titleEl.innerText = `${movie.Title} - ${movie.Year}`;
      posterEl.src = movie.Poster;

      detailsEl.innerHTML = '';

      detailsEl.appendChild(titleEl);
      detailsEl.appendChild(posterEl);
    });

    itemEl.appendChild(itemTitleEl);
    itemEl.appendChild(itemMoreBtnEl);

    movieListEl.appendChild(itemEl);
  });
  data.totalResults;
  const pages = Math.ceil(Number(data.totalResults) / RESULTS_PER_PAGE);

  paginationEl.innerHTML = '';
  for (let i = 1; i <= pages; i++) {
    const pageButtonEl = document.createElement('button');

    pageButtonEl.innerText = i;
    pageButtonEl.addEventListener('click', () => {
      currentPage = i;
      getMovie(currentSearchValue, i).then(handleResponse);
    });

    paginationEl.appendChild(pageButtonEl);
  }
}

function getMovie(movieToFind, page = 1) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieToFind}&page=${page}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
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
    getMovie(searchValue).then(handleResponse);
  }
});
