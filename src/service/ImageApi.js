import PokemonUtils from '../util/PokemonUtil';

const ImageApi = (id) => (`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${PokemonUtils.formatId(id)}.png`);

export default ImageApi;