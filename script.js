const inputElement = document.getElementById('numbers-to-activate');
const buttonElement = document.getElementById('submit-button');

buttonElement.addEventListener('click', () => {
  const remainingSeconds = inputElement.value;
  setTimeout(() => {
    console.log('Rusni pi*da');
  }, remainingSeconds * 1000);
});
