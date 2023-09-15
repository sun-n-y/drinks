import fetchDrinks from './fetchDrinks.js';

const displayDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log(data);
};

export default displayDrinks;
