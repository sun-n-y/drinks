import get from './getElement.js';
import fetchDrinks from './fetchDrinks.js';
import { hideLoading } from './loading.js';

const idURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const img = get('.single-drink-image');
const title = get('.title');
const descritpion = get('.desc');
const ingredientsList = get('.ingredients');

const displaySingleDrink = async () => {
  const drinkID = localStorage.getItem('drink');
  if (!drinkID) {
    document.location.replace('index.html');
  }
  const data = await fetchDrinks(`${idURL}${drinkID}`);
  const drink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: desc,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  } = drink;
  img.src = image;
  title.textContent = name;
  descritpion.textContent = desc;
  const list = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  ];
  ingredientsList.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="fa-regular fa-square-check"></i><span class="ingredient">${item}</span></li>`;
    })
    .join('');
  document.title = name;
  hideLoading();
};
export default displaySingleDrink;
