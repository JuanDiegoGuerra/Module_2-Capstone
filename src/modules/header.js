import pokemonLogo from '../images/International_Pokémon_logo.svg';
import pokemons from './pokemons.js';

const headingLogo = document.querySelector('.heading__logo');
const logo = document.createElement('img');
logo.setAttribute('src', pokemonLogo);
logo.setAttribute('alt', 'Pokemon Logo');
headingLogo.appendChild(logo);

const navList = document.querySelector('.nav__list');

const createHeader = () => {
  const header = document.querySelector('.heading');
  const listItems = ['Pokemon', 'Planet', 'Race'];

  for (let i = 0; i < listItems.length; i += 1) {
    const navItems = document.createElement('li');

    navItems.setAttribute('class', 'nav__item');
    navItems.innerText = `${listItems[i]}`;

    if (listItems[i] === 'Pokemon') {
      pokemons('https://pokeapi.co/api/v2/pokemon?limit=8&offset=12')
        .then((response) => {
          navItems.classList.add('active');
          navItems.innerText = `${listItems[i]}(${response})`;
        });
    } else {
      navItems.classList.remove('active');
    }

    navList.appendChild(navItems);
  }

  header.appendChild(navList);
};

export default createHeader;