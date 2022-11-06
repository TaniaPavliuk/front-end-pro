const inputElement = document.getElementById('numbers-to-activate');
const buttonElement = document.getElementById('submit-button');
console.log(buttonElement);
buttonElement.addEventListener('click', () => {
  const remainingSeconds = inputElement.value;
  setTimeout(() => {
    console.log('Rusni pi*da');
  }, remainingSeconds * 1000);
});
// 2
const dateEl = document.getElementById('event-date-input');
const startButtonEl = document.getElementById('campaign-button');
const messageEl = document.getElementById('message');

const secondsInYear = 1000 * 60 * 60 * 24 * 365;
const secondsInDay = 1000 * 60 * 60 * 24;
const secondsInHour = 1000 * 60 * 60;

startButtonEl.addEventListener('click', () => {
  setInterval(() => {
    const nowTimestamp = Date.now();
    const finalDateTimestamp = new Date(dateEl.value).getTime();
    const differenceInSeconds = finalDateTimestamp - nowTimestamp;

    const years = Math.floor(differenceInSeconds / secondsInYear);
    const days = Math.floor((differenceInSeconds / secondsInDay) % 365);
    const hours = Math.floor((differenceInSeconds / secondsInHour) % 24);
    const minutes = Math.floor((differenceInSeconds / 1000 / 60) % 60);
    const seconds = Math.floor((differenceInSeconds / 1000) % 60);

    messageEl.innerText = `till date ${years} years ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }, 1000);
});
