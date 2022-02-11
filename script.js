const keyAPI = '2v2aU6pUEYfXap7E6vig9pUqbHGlw3K5F4iXRdv9';
const url = `https://api.nasa.gov/planetary/apod?api_key=${keyAPI}&date=`
const responseSection = document.querySelector('.returned-response');
const btn = document.querySelector('.button');
const input =  document.querySelector('#date');

const getJSONFromUrlAPI = async (date) => {
  const response = await fetch(`${url}${date}`);
  const data = response.json();

  return data;
};

// const putImageOnScreen = (imageUrl) => {
//   const img = document.createElement('img');
//   img.src = imageUrl;
//   responseSection.appendChild(img);
// };

// const putExplanationOnScreen = (explanationUrl) => {
//   const p = document.createElement('p');
//   p.innerHTML = explanationUrl;
//   responseSection.appendChild(p);
// };
function createElementOfScreen({ url, explanation }) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  if (img) {
    img.src = url;
  } else {
    img.alt = 'Imagem da data'
  }
  const p = document.createElement('p');
  p.className = 'result';
  p.innerText = explanation;
  div.appendChild(img);
  div.appendChild(p);
  return div;
}

async function renderScreen() {
  const response = await getJSONFromUrlAPI(input.value);
  responseSection.innerHTML = '';
  responseSection.appendChild(createElementOfScreen(response));
}

window.onload = async () => {
  // const response = await getJSONFromUrlAPI();
  // putImageOnScreen(response.url);
  // putExplanationOnScreen(response.explanation);
  // console.log(response)
  btn.addEventListener('click', renderScreen)
}