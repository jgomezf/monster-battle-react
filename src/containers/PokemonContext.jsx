import React, { useState } from "react";

const PokemonContext = React.createContext({});

export function PokemonProvider({ children }) {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState(0);
  const [message, setMessage] = useState("What attack do you want to use?");

  return (
    <PokemonContext.Provider
      value={{ data, setData, position, setPosition, message, setMessage }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

const PokemonConsumer = PokemonContext.Consumer;

export { PokemonConsumer };
export default PokemonContext;
