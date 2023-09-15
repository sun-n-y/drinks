const fetchDrinks = async (url) => {
  const repsonse = await fetch(url);
  const data = await repsonse.json();
  return data;
};

export default fetchDrinks;
