const listEl = document.getElementById('list');
const inputEl = document.getElementById('new-item');
const buttonEl = document.getElementById('submit-button');

const todos = ['learn js', 'go shopping'];

function renderOneItem(item, index) {
  const itemEl = document.createElement('li');
  const itemValueEl = document.createElement('p');
  const deleteButtonEl = document.createElement('button');

  itemEl.classList.add('item');
  itemValueEl.innerText = item;
  deleteButtonEl.innerText = 'DELETE';

  deleteButtonEl.addEventListener('click', () => {
    deleteItem(index);
  });

  itemEl.appendChild(itemValueEl);
  itemEl.appendChild(deleteButtonEl);

  return itemEl;
}

function renderList() {
  listEl.innerHTML = '';

  todos.forEach((item, index) => {
    const itemEl = renderOneItem(item, index);
    listEl.appendChild(itemEl);
  });
}

function deleteItem(index) {
  todos.splice(index, 1);
  renderList();
}

function addItem(item) {
  todos.push(item);
  renderList();
}

buttonEl.addEventListener('click', () => {
  if (inputEl.value) {
    addItem(inputEl.value);
    inputEl.value = '';
  }
});

renderList(todos);
