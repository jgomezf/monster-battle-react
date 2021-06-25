import React, { useContext } from "react";

import Moves from "./Moves";
import Dialog from "./Dialog";
import PokemonContext from "../containers/PokemonContext";

export default function Panel() {
  const { position } = useContext(PokemonContext);

  return (
    <>
      {position === 1 ? (
        <>
          <div className="column">
            <Moves />
          </div>
          <div className="column">
            <Dialog />
          </div>
        </>
      ) : (
        <>
          <div className="column">
            <Dialog />
          </div>
          <div className="column">
            <Moves />
          </div>
        </>
      )}
    </>
  );
}
