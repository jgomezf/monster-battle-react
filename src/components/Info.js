import React from "react";

export default function Info({ name = "" }) {
  return (
    <div className="info">
      <p className="name">{`Pokemon: ${name}`}</p>
    </div>
  );
}
