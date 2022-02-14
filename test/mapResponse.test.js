const { mapResponse } = require("../funções/mapResponse");

const arr = [{
  date: "2022-02-02",
  explanation: "What's happening at the center of our galaxy? It's hard to tell with optical telescopes since visible light is blocked by intervening interstellar dust. In other bands of light, though, such as radio, the galactic center can be imaged and shows itself to be quite an interesting and active place.  The featured picture shows the latest image of our Milky Way's center by the MeerKAT array of 64 radio dishes in South Africa. Spanning four times the angular size of the Moon (2 degrees), the image is impressively vast, deep, and detailed.  Many known sources are shown in clear detail, including many with a prefix of Sgr, since the galactic center is in the direction of the constellation Sagittarius.  In our Galaxy's Center lies Sgr A, found here in the image center, which houses the Milky Way's central supermassive black hole.  Other sources in the image are not as well understood, including the Arc, just to the left of Sgr A, and numerous filamentary threads. Goals for MeerKAT include searching for radio emission from neutral hydrogen emitted in a much younger universe and brief but distant radio flashes.   Open Science: Browse 2,700+ codes in the Astrophysics Source Code Library",
  hdurl: "https://apod.nasa.gov/apod/image/2202/MwCenter_MeerKATMunoz_7530.jpg",
  media_type: "image",
  service_version: "v1",
  title: "The Galactic Center in Radio from MeerKAT",
  url: "https://apod.nasa.gov/apod/image/2202/MwCenter_MeerKATMunoz_1080.jpg",
}]
describe('testa a função mapResponse', () => {
  it('1. testa se mapResponse é uma função', () => {
    expect(typeof mapResponse).toBe('function');
  });
  it('2. testa se mapResponse retorna um objeto quando recebe um array', () => {
    const mapTest =mapResponse(arr)
    expect(typeof mapTest).toBe('object');
  });
  it('3. testa se o objeto retornado possui 3 propriedades', () => {
    expect(Object.keys(mapResponse(arr)).length).toBe(3);
  });
  it('4. testa se o objeto retornado possui a chave "url"', () => {
    expect(Object.keys(mapResponse(arr))).toContain('url')
  });
  it('5. testa se o objeto retornado possui a chave "explanation"', () => {
    expect(Object.keys(mapResponse(arr))).toContain('explanation')
  });
  it('6. testa se o objeto retornado possui a chave "media_type"', () => {
    expect(Object.keys(mapResponse(arr))).toContain('media_type')
  });

});
