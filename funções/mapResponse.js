const mapResponse = (response) => {
  return response.map((star) => {
    const objectOfStar = {
      url: star.url,
      explanation: star.explanation,
      media_type: star.media_type,
    };  
    return objectOfStar
  })[0]
};

if (typeof module !== 'undefined') {
  module.exports = {
    mapResponse,
  };
}