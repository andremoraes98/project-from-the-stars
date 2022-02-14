const keyAPI = '2v2aU6pUEYfXap7E6vig9pUqbHGlw3K5F4iXRdv9';
const url = `https://api.nasa.gov/planetary/apod?api_key=${keyAPI}&start_date=`

const getJSONFromUrlAPI = async (date) => {
  const response = await fetch(`${url}${date}&end_date=${date}`);
  const data = response.json();
console.log(date)
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    getJSONFromUrlAPI,
  };
}