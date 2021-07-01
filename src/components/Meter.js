import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";

export default function Meter({ bar = "", percentage = 100 }) {
  return (
    <div className="meter">
      <span className={`bar ${bar}`} style={{ width: `${percentage}%` }}></span>
    </div>
  );
}
