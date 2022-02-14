
const responseSection = document.querySelector('.returned-response');
const btn = document.querySelector('.button');
const input =  document.querySelector('#date');

function createElementOfScreen({ url, explanation, media_type }) {
  const div = document.createElement('div');
  div.className = 'media';
  if (media_type === 'image') {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagem da data';
    div.appendChild(img);
  } else {
    const img = document.createElement('iframe');
    img.src = url;
    img.alt = 'Vídeo da data';
    div.appendChild(img);
  }
  const p = document.createElement('p');
  p.className = 'result';
  p.innerText = explanation;
  div.appendChild(p);
  return div;
}

window.onload = async () => {
  btn.addEventListener('click', renderScreen)
}

if (typeof module !== 'undefined') {
  module.exports = {
   input,
   responseSection,
   createElementOfScreen,
  };
}