import React from "react";

export default function Health({ current = 0, initial = 0 }) {
  return (
    <div className="health">
      {current}/{initial}
    </div>
  );
}
