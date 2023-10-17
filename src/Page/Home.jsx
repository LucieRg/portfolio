import React from "react";
import Stars from "../Contents/Stars";
import Nav from "../Contents/Nav";
import About from "../Contents/About";
import Skills from "../Contents/Skills";

import "../index.css";
import Projets from "../Contents/Projets";
import Contact from "../Contents/Contact";
import Footer from "../Contents/Footer";
import ArrowButton from "../Components/ArrowButton";

export default function Home() {
  return (
    <main>
      <Stars />
      <Nav />
      <About />
      <Skills />
      <Projets/>
      <Contact/>
      <Footer/>
      <ArrowButton/>
    </main>
  );
}
