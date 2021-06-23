import React from "react";

import Status from "./Status";
import Pokemon from "./Pokemon";

export default function Arena({ data = [] }) {
  const pokemon = data[0];
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
