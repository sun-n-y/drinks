import get from './utils/getElement.js';
import displayDrinks from './utils/displayDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', displayDrinks(URL));
