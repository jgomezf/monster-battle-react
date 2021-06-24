import React from "react";
import ButtonAttack from "./ButtonAttack";

export default function Moves({ moves = [] }) {
  return (
    <div className="moves">
      {moves.map((item, idx) => {
        return <ButtonAttack key={idx} nameAttack={item.name} />;
      })}
    </div>
  );
}
