import http from "../utils/http";
import { getRandomNumber } from "../utils/utils";

const formatPokemon = (data) => {
  return {
    name: data.name,
    health: {
      initial: data.stats[0].base_stat,
      current: data.stats[0].base_stat,
      bar: "green",
      percentage: 100,
    },
    avatar: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((item) => ({ name: item.type.name })),
    moves: data.moves.slice(0, 4).map((item) => ({ name: item.move.name })),
    _ui: {
      bar: null,
      health: null,
    },
  };
};

export async function getPokemon() {
  const id = getRandomNumber(898);
  const response = await http.get(`${id}`);
  const { data } = response;
  return formatPokemon(data);
}
