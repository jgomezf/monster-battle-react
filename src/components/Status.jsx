import React from "react";

const Status = ({ name, types, bar, current, initial }) => {
  return (
    <div className="status">
      <div className="info">
        <p className="name">Pokemon: {name}</p>
        <ul className="types">
          {types.map((type) => {
            <li className={`button ${type.name}`}>{type.name}</li>;
          })}
        </ul>
        <div className="meter">
          <span className={`bar ${bar}`} style="width: 100%"></span>
        </div>
        <div class="health">
          ${current}/${initial}
        </div>
      </div>
    </div>
  );
};
