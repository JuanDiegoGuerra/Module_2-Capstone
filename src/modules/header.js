import pokemonLogo from '../images/pokemon-logo.jpeg';

const headingLogo = document.querySelector('.heading__logo');
const logo = document.createElement('img');
logo.setAttribute('src', pokemonLogo);
logo.setAttribute('alt', 'Pokemon Logo');
headingLogo.appendChild(logo);

const navList = document.querySelector('.nav__list');

const listItems = ['Pokemon', 'Planet', 'Race'];

const createHeader = () => {
  const header = document.querySelector('.heading');
  const count = 0;

  for (let i = 0; i < listItems.length; i += 1) {
    const navItems = document.createElement('li');

    navItems.setAttribute('class', 'nav__item');
    navItems.innerText = `${listItems[i]}`;

    if (listItems[i] === 'Pokemon') {
      navItems.classList.add('active');
      navItems.innerText = `${listItems[i]} (${count})`;
    }

    navList.appendChild(navItems);
  }

  header.appendChild(navList);
};

export default createHeader;