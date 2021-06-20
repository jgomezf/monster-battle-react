import React from "react";
import Status from "./Status";
import Pokemon from "./Pokemon";

const Section = ({ id, data = [] }) => {
  const pokemon = data[0];
  console.log(pokemon);
  return (
    <section id={id}>
      {data.map((p, idx) => {
        return (
          <div className="column">
            <Status
              key={idx}
              name={p.name}
              types={p.types}
              bar={p.health.bar}
              current={p.health.current}
              initial={p.health.initial}
            />
            <Pokemon key={idx} avatar={p.avatar} />
          </div>
        );
      })}
    </section>
  );
};

export default Section;
