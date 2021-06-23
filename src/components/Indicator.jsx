import React from "react";

export default function Indicator({ position = 0 }) {
  return (
    <>
      <div className="column">
        {position === 0 && <div className="arrow"></div>}
      </div>
      <div className="column">
        {position === 1 && <div className="arrow"></div>}
      </div>
    </>
  );
}
