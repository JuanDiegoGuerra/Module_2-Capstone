import fetch from 'node-fetch';

let numberOfItems;

const pokemons = async (url) => {
  await fetch(url).then((response) => response.json())
    .then((data) => data.results)
    .then((obj) => Object.entries(obj))
    .then((arr) => {
      numberOfItems = arr.length;
    })
    .catch((err) => {
      throw ("Couldn't fetch pokemons", err);
    });
  return numberOfItems;
};

export default pokemons;