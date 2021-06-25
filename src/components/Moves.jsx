import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";
import ButtonAttack from "./ButtonAttack";

export default function Moves() {
  const { data, position } = useContext(PokemonContext);
  const moves = data.length > 0 ? data[position].moves : [];

  return (
    <div className="moves">
      {moves.map((item, idx) => {
        return <ButtonAttack key={idx} nameAttack={item.name} />;
      })}
    </div>
  );
}
