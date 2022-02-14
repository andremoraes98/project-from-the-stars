const { getJSONFromUrlAPI } = require("../funções/getJSONFromUrlAPI");


describe('Testa a função getJSONFromUrlAPI', () => {
  it('1. testa se getJSONFromUrlAPI é uma função', () => {
    expect(typeof getJSONFromUrlAPI).toBe('function');
  });
});
