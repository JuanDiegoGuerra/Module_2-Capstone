import unlike from '../images/unlike.png';
import { displayPopup } from './popUp.js';
import API from './api_data.js';

const api = new API();
const pokemonURL = api.urls.pokemons;

let numberOfItems = 0;

const cards = document.body.querySelector('.cards');
cards.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'comment') {
    const poke = Number(e.target.id - 1);
    const url = `${pokemonURL}${poke}`;
    displayPopup(url, poke);
  }
});

const pokemons = async (url) => {
  await fetch(url).then((response) => response.json())
    .then((data) => data.results)
    .then((obj) => Object.entries(obj))
    .then((arr) => {
      numberOfItems = arr.length;
      arr.forEach((element) => {
        const id = Number(element[0]) + 1;
        let pokemonName = element[1].name;
        pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1);
        fetch(element[1].url).then((response) => response.json())
          .then((data) => data.sprites.other['official-artwork'].front_default)
          .then((src) => {
            const card = `<div class="card">
            <img class="pokemon-img" id=${id} src="${src}" alt="Pokemons">
            <div class="card-title">
            <h2>${pokemonName}</h2>
            <img id="likeId${id + 1}" class="likeBtn" src=${unlike} alt="like_icon">
            </div> 
            <p class="like-count" id="like-count${id + 1}">0 Likes</p>
            <div class="buttons">
              <button type="button" id="${id + 1}" class="comment">Comments</button>
            </div>
          </div>`;
            cards.innerHTML += card;
          });
      });
    })
    .catch((err) => {
      throw ("Couldn't fetch pokemons", err);
    });
  return numberOfItems;
};

export default pokemons;