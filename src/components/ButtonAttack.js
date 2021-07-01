import React, { useContext } from "react";
import PokemonContext from "../containers/PokemonContext";
import {
  calculateBarColor,
  calculateStatus,
  getRandomNumber,
} from "../utils/utils";

export default function ButtonAttack({ nameAttack = "" }) {
  const { data, position, setPosition, setMessage, disabled, setDisabled } =
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

    pokemon.health.current = newHealth;
    pokemon.health.bar = newBarColor;
    pokemon.health.percentage = newPercentage;

    if (pokemon.health.current > 0) {
      const newPosition = (position + 1) % 2;

      setPosition(newPosition);
    } else {
      const newMessage = "Wins!!!";
      const newDisabled = "disabled";

      setMessage(newMessage);
      setDisabled(newDisabled);
    }
  }

  return (
    <>
      {disabled === "" ? (
        <button className="button black" onClick={attack}>
          {nameAttack}
        </button>
      ) : (
        <button className="button black" onClick={attack} disabled>
          {nameAttack}
        </button>
      )}
    </>
  );
}
