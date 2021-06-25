import React, { useEffect, useContext } from "react";
import PokemonContext from "./PokemonContext";
import Status from "../components/Status";
import Pokemon from "../components/Pokemon";
import { getPokemon } from "../api/pokemons";
import { getRandomNumber } from "../utils/utils";

export default function Arena() {
  const { data, setData } = useContext(PokemonContext);
  const { setPosition } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const data = await Promise.all([getPokemon(), getPokemon()]);
      const position = getRandomNumber(1, 0);
      setData(data);
      setPosition(position);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {data.map((p, idx) => {
        return (
          <div className="column" key={idx}>
            {idx === 0 ? (
              <>
                <Status
                  name={p.name}
                  types={p.types}
                  bar={p.health.bar}
                  current={p.health.current}
                  initial={p.health.initial}
                />
                <Pokemon avatar={p.avatar} />
              </>
            ) : (
              <>
                <Pokemon avatar={p.avatar} />{" "}
                <Status
                  name={p.name}
                  types={p.types}
                  bar={p.health.bar}
                  current={p.health.current}
                  initial={p.health.initial}
                />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
