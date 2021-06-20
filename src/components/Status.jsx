import React from "react";
//style="width: 100%"
const Status = ({
  name = "",
  types = [],
  bar = "",
  current = 0,
  initial = 0,
}) => {
  return (
    <div className="status">
      <div className="info">
        <p className="name">{`Pokemon: ${name}`}</p>
        <ul className="types">
          {types.map((type, idx) => {
            <li key={idx} className={`button ${type.name}`}>
              {type.name}
            </li>;
          })}
        </ul>
        <div className="meter">
          <span className={`bar ${bar}`}></span>
        </div>
        <div className="health">
          {current}/{initial}
        </div>
      </div>
    </div>
  );
};

export default Status;
