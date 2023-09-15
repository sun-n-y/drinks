import fetchDrinks from './fetchDrinks.js';
import get from './getElement.js';

const displayDrinks = async (url) => {
  const data = await fetchDrinks(url);
  const drinks = data.drinks;
  const drinksContainer = get('.drinks-center');
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
};

export default displayDrinks;
