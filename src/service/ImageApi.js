const ImageApi = (id) => (`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("000" + id).slice(-3)}.png`);

export default ImageApi;
