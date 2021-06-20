import React from "react";
import "../assets/styles/App.css";

const Pokemom = ({ avatar = "" }) => {
  return (
    <div className="pokemon">
      <img src={avatar} />
    </div>
  );
};

export default Pokemom;
