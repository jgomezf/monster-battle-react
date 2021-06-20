import React, { useState, useEffect } from "react";

import { getRandomNumber } from "../utils/utils";

import Section from "../components/Section";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => {
  const [data, setPokemons] = useState([]);
  const [position, setPosition] = useState(-1);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const data = await Promise.all([getPokemon(), getPokemon()]);
      const position = getRandomNumber(1, 0);
      setPokemons(data);
      setPosition(position);
    } catch (error) {
      console.error(error);
    }
  }

  const formatPokemon = (data) => {
    return {
      name: data.name,
      health: {
        initial: data.stats[0].base_stat,
        current: data.stats[0].base_stat,
        bar: "green",
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

  async function getPokemon() {
    const id = getRandomNumber(898);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataJson = await response.json();

    return formatPokemon(dataJson);
  }

  return (
    <>
      <Section id="arena" data={data} />
      {/* <Section id="indicator" pokemon={this.state.pokemons} />
        <Section id="panel" pokemon={this.state.pokemons} /> */}

      <Footer />
    </>
  );
};

export default App;
