import React from "react";

const Pokemom = ({ avatar = "" }) => {
  console.log(avatar);
  return (
    <div className="pokemon">
      <img src={avatar} />
    </div>
  );
};

export default Pokemom;
