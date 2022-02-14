const { renderScreen } = require("../funções/renderScreen");

describe('Testa a função renderScreen', () => {
  it('teste se renderScreen é uma função', () => {
    expect(typeof renderScreen).toBe('function');
  });
});