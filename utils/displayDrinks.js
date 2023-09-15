import fetchDrinks from './fetchDrinks.js';
import get from './getElement.js';
import { showLoading } from './loading.js';
import { hideLoading } from './loading.js';

const drinksContainer = get('.drinks-center');
const errorMsg = get('.error-msg');

const displayDrinks = async (url) => {
  errorMsg.classList.add('hide-error');
  drinksContainer.innerHTML = '';
  showLoading();
  try {
    const data = await fetchDrinks(url);
    const drinks = data.drinks;
    drinksContainer.innerHTML = drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href="singleDrink.html" class="single-drink" data-id="${id}">
                <img src="${image}"
                    alt="${name}" class="drink-image">
                <span class="drink-name">${name}</span>
            </a>`;
      })
      .join('');
    hideLoading();
  } catch (error) {
    hideLoading();
    errorMsg.classList.remove('hide-error');
    errorMsg.textContent = `Sorry, no matches found.`;
  }
};

export default displayDrinks;
