async function renderScreen() {
  const response = await getJSONFromUrlAPI(input.value);
  const year = parseInt(input.value.split('-')[0]);
  
  if (year < 1995) {
    window.alert('Ano inválido!');
    input.value = '';
  } else { 
    responseSection.innerHTML = '';
    responseSection.appendChild(createElementOfScreen(response.map((star) => {
      const objectOfStar = {
        url: star.url,
        explanation: star.explanation,
        media_type: star.media_type,
      };  
      return objectOfStar
    })[0]));
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    renderScreen,
  };
}