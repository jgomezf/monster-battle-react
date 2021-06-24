import React from "react";

import Moves from "./Moves";
import Dialog from "./Dialog";

export default function Panel({ position = 0, data = {}, message = "" }) {
  console.log(data);
  return (
    <>
      {position === 1 ? (
        <>
          <div className="column">
            <Moves moves={data.moves}/>
          </div>
          <div className="column">
            <Dialog name={data.name} message={message} />
          </div>
        </>
      ) : (
        <>
          <div className="column">
            <Dialog name={data.name} message={message} />
          </div>
          <div className="column">
            <Moves moves={data.moves}/>
          </div>
        </>
      )}
    </>
  );
}
