async function renderScreen() {
  const response = await getJSONFromUrlAPI(input.value);
  const year = parseInt(input.value.split('-')[0]);
  
  if (year < 1995) {
    window.alert('Ano inválido!');
    input.value = '';
  } else { 
    responseSection.innerHTML = '';
    responseSection.appendChild(createElementOfScreen(mapResponse(response)));
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    renderScreen,
  };
}