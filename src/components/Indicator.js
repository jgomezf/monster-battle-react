import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";

export default function Indicator() {
  const { position } = useContext(PokemonContext);
  return (
    <>
      <div className="column">
        {position === 0 && <div className="arrow"></div>}
      </div>
      <div className="column">
        {position === 1 && <div className="arrow"></div>}
      </div>
    </>
  );
}
