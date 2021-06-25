import React from "react";

export default function Types({ types = [] }) {
  return (
    <ul className="types">
      {types.map((type, idx) => {
        return (
          <li key={idx} className={`button ${type.name}`}>
            {type.name}
          </li>
        );
      })}
    </ul>
  );
}
