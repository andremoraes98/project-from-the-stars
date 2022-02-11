const keyAPI = '2v2aU6pUEYfXap7E6vig9pUqbHGlw3K5F4iXRdv9';
const url = `https://api.nasa.gov/planetary/apod?api_key=${keyAPI}&date=2017-07-08`
const responseSection = document.querySelector('.returned-response');

const getJSONFromUrlAPI = async () => {
  const response = await fetch(url);
  const data = response.json();

  return data;
};

const putImageOnScreen = (imageUrl) => {
  const img = document.createElement('img');
  img.src = imageUrl;
  responseSection.appendChild(img);
};

const putExplanationOnScreen = (explanationUrl) => {
  const p = document.createElement('p');
  p.innerHTML = explanationUrl;
  responseSection.appendChild(p);
};

window.onload = async () => {
  const response = await getJSONFromUrlAPI();
  putImageOnScreen(response.url);
  putExplanationOnScreen(response.explanation);
  console.log(response)
}