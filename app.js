import get from './utils/getElement.js';
import displayDrinks from './utils/displayDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const searchInput = get('[name="drink"]');
const drinksContainer = get('.drinks-center');

window.addEventListener('DOMContentLoaded', displayDrinks(URL));

searchInput.addEventListener('keyup', () => {
  const value = searchInput.value;
  displayDrinks(`${URL}${value}`);
});

drinksContainer.addEventListener('click', (e) => {
  const id = e.target.parentElement.dataset.id;
  localStorage.setItem('drink', id);
});
