import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";

export default function Dialog() {
  const { data, message, position } = useContext(PokemonContext);
  const name = data.length > 0 ? data[position].name : "";

  return (
    <div className="dialog">
      <p>
        <span className="name">{name}</span>,
        <span className="message"> {message}</span>
      </p>
    </div>
  );
}
