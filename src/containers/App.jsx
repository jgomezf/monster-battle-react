import React from "react";
import Section from "../components/Section";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => {
  return (
    <>
      <Section id="arena" />
      <Section id="indicator" />
      <Section id="panel" />

      <Footer />
    </>
  );
};

export default App;
