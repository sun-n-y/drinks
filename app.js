import get from './utils/getElement.js';
import displayDrinks from './utils/displayDrinks.js';

const URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

window.addEventListener('DOMContentLoaded', displayDrinks(URL));
