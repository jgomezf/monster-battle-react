import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";
import {
  calculateBarColor,
  calculateStatus,
  getRandomNumber,
} from "../utils/utils";

export default function ButtonAttack({ nameAttack = "" }) {
  const { data, position, setData, setPosition, setPercentage, setMessage } =
    useContext(PokemonContext);

  function attack() {
    const attacked = (position + 1) % 2;
    const pokemon = data[attacked];
    const { newHealth, newPercentage } = calculateStatus(
      pokemon.health.initial,
      pokemon.health.current,
      getRandomNumber(20)
    );
    const newBarColor = calculateBarColor(newPercentage);
    console.log(pokemon);
    console.log(newPercentage);
    setPercentage(newPercentage);

    pokemon.health.current = newHealth;
    pokemon.health.bar = newBarColor;
    //data[position] = pokemon;

    //setData(data);

    if (pokemon.health.current > 0) {
      const newPosition = (position + 1) % 2;
      setPosition(newPosition);
    } else {
      setMessage({ message: "Wins!!!" });
      //$("#panel .moves button").attr("disabled", "");
    }
  }

  return (
    <button className="button black" onClick={attack}>
      {nameAttack}
    </button>
  );
}
