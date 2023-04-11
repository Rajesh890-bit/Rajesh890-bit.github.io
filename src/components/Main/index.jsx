import React from "react";

/* Componet */
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";

const Main = () => (
  <main>
    <About id="about" class="about section" />

    <Service />

    <Project />

    <Contact />
  </main>
);

export default Main;
