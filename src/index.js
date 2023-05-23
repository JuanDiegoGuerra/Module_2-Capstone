import './style.css';
import createHeader from './modules/header.js';
import API from './modules/api_data.js';
import pokemons from './modules/pokemons.js';
import likesPost, { likeGet } from './modules/likes.js';

createHeader();

const itemNumbers = document.getElementById('PokeNumber');
likeGet('L3cd5MnXmz3nt1juQH1n')
  .then((data) => {
    data.forEach((element) => {
      const targetItem = element[1].item_id.split('likeId').slice(1);
      document.querySelector(`#like-count${targetItem[0]}`).innerHTML = `${element[1].likes} Likes`;
    });
  });

document.body.addEventListener('click', (e) => {
 if (e.target && e.target.className === 'likeBtn') {
    likesPost('L3cd5MnXmz3nt1juQH1n', e.target);
    likeGet('L3cd5MnXmz3nt1juQH1n');
    const targetId = (e.target.id).split('likeId').slice(1);
    const targetHeart = document.querySelector(`#like-count${targetId}`).innerHTML.split(' ');
    document.querySelector(`#like-count${targetId}`).innerHTML = `${(Number(targetHeart[0])) + 1} Likes`;
 }
});  

pokemons('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then((response) => {
  itemNumbers.innerHTML = `Pokemons(${response})`;
});

const api = new API();