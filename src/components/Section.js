import React from "react";

import "../assets/styles/App.css";

const Section = ({ id, children }) => {
  return <section id={id}>{children}</section>;
};

export default Section;
