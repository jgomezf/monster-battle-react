import React, { useState, useEffect } from "react";

import { getRandomNumber } from "../utils/utils";

import Section from "../components/Section";
import Footer from "../components/Footer";
import Arena from "../components/Arena";
import Indicator from "../components/Indicator";
import Panel from "../components/Panel";
import { PokemonProvider } from "../containers/PokemonContext";
import {getPokemon} from "../api/pokemons";

import "../assets/styles/App.css";

const App = () => {
  const [data, setPokemons] = useState([]);
  const [position, setPosition] = useState(-1);
  const [message, setMessage] = useState("What attack do you want to use?");

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

  return (
    <>
      <Section id="arena">
        <Arena data={data}></Arena>
      </Section>
      <Section id="indicator">
        <Indicator position={position}></Indicator>
      </Section>
      <Section id="panel">
        {/* <PokemonProvider> */}
        <Panel
          position={position}
          data={data[position]}
          message={message}
        ></Panel>
        {/* </PokemonProvider> */}
      </Section>
      {/* <Section id="indicator" pokemon={this.state.pokemons} />
        <Section id="panel" pokemon={this.state.pokemons} /> */}

      <Footer />
    </>
  );
};

export default App;
