import pokemons from '../__mock__/pokemons.js';

describe('Test number of items on Home Page', () => {
  test('False Pokemons count with limit 15 and expect 30', () => {
    pokemons('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0').then((response) => {
      expect(response).toBe(30);
    });
  });

  test('Pokemons count with limit 25', () => {
    pokemons('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0').then((response) => {
      expect(response).toBe(25);
    });
  });

  test('Pokemons count with limit 35', () => {
    pokemons('https://pokeapi.co/api/v2/pokemon?limit=35&offset=0').then((response) => {
      expect(response).toBe(35);
    });
  });
});