import React from "react";
import Types from "./Types";
import Info from "./Info";
import Meter from "./Meter";
import Health from "./Health";

//style="width: 100%"

import "../assets/styles/App.css";
const Status = ({
  name = "",
  types = [],
  bar = "",
  current = 0,
  initial = 0,
  percentage = 0,
}) => {
  return (
    <div className="status">
      <Info name={name} />
      <Types types={types} />
      <Meter bar={bar} percentage={percentage} />
      <Health current={current} initial={initial} />
    </div>
  );
};

export default Status;
