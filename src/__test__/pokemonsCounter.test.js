import pokeCounter from '../__mock__/pokemons.js';

describe('Pokemon Counter Test', () => {
  test('Tests when the Pokemon Obj has some value', () => {
    const items = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }, { item: 5 }];
    expect(pokeCounter(items)).toBe(5);
  });
  test('Test when the Pokemon Obj is empty', () => {
    const items = [];
    expect(pokeCounter(items)).toBe(0);
  });
  test('Test when the Pokemon Obj has one value', () => {
    const items = [{}];
    expect(pokeCounter(items)).toBe(1);
  });
});