import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";

export default function Meter({ bar = "" }) {
  const { percentage } = useContext(PokemonContext);

  return (
    <div className="meter">
      <span className={`bar ${bar}`} style={{ width: `${percentage}%` }}></span>
    </div>
  );
}
