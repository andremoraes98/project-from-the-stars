const keyAPI = '2v2aU6pUEYfXap7E6vig9pUqbHGlw3K5F4iXRdv9';
const url = `https://api.nasa.gov/planetary/apod?api_key=${keyAPI}&date=2017-07-08`
const imgSection = document.querySelector('.returned-image');

const getJSONFromUrlAPI = async () => {
  const response = await fetch(url);
  const data = response.json();

  return data;
};

const putImageOnScreen = (imageUrl) => {
  const img = document.createElement('img');
  img.src = imageUrl;
  imgSection.appendChild(img);
};

window.onload = async () => {
  const response = await getJSONFromUrlAPI();
  putImageOnScreen(response.url);
}