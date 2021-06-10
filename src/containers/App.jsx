import React from "react";

import { getRandomNumber } from "../utils/utils";

import Section from "../components/Section";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

class App extends React.Component {
  state = {
    pokemons: {},
    position: 0,
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.getPokemon();
  }

  formatPokemon = (data) => {
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

  getPokemon = async () => {
    const id = getRandomNumber(898);
    const position = getRandomNumber(1,0)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataJson = await response.json();
    const data = this.formatPokemon(dataJson);
    this.setState({
      data: data,
      position
    });

    console.log(this.state);
  };

  render() {
    return (
      <>
        <Section id="arena" />
        <Section id="indicator" />
        <Section id="panel" />

        <Footer />
      </>
    );
  }
}

export default App;
