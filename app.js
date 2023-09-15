import get from './utils/getElement.js';
import displayDrinks from './utils/displayDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const searchInput = get('[name="drink"]');

window.addEventListener('DOMContentLoaded', displayDrinks(URL));

searchInput.addEventListener('keyup', () => {
  const value = searchInput.value;
  displayDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
  );
});
