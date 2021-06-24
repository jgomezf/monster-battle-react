import React from "react";

export default function Dialog({ name = "", message = "" }) {
  return (
    <div className="dialog">
      <p>
        <span className="name">{name}</span>,
        <span className="message"> {message}</span>
      </p>
    </div>
  );
}
