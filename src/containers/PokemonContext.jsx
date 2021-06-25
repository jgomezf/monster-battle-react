import React, { useState } from "react";

const PokemonContext = React.createContext({});

export function PokemonProvider({ children }) {
  const [data, setData] = useState({});

  return <PokemonContext value={{ data, setData }}>{children}</PokemonContext>;
}

const PokemonConsumer = PokemonContext.Consumer;

export default PokemonContext;
