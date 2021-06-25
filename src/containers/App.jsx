import React from "react";

import Section from "../components/Section";
import Footer from "../components/Footer";
import Arena from "./Arena";
import Indicator from "../components/Indicator";
import Panel from "../components/Panel";
import { PokemonProvider } from "./PokemonContext";

import "../assets/styles/App.css";

const App = () => {
  return (
    <>
      <PokemonProvider>
        <Section id="arena">
          <Arena />
        </Section>
        <Section id="indicator">
          <Indicator />
        </Section>
        <Section id="panel">
          <Panel />
        </Section>
      </PokemonProvider>
      <Footer />
    </>
  );
};

export default App;
