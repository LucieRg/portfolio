import React, { useState, useEffect } from "react";
import Rive from "@rive-app/react-canvas";
import Stars from "../Contents/Stars";
import Nav from "../Contents/Nav";
import About from "../Contents/About";
import Skills from "../Contents/Skills";
import Projets from "../Contents/Projets";
import Contact from "../Contents/Contact";
import Footer from "../Contents/Footer";
import ArrowButton from "../Components/ArrowButton";
import "../index.scss";
import Rocket from "../Assets/rocket.riv";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate(); // Utilisation de useNavigate

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 3600); // Temps de chargement simulé de 3,6 secondes

    // Rediriger vers la page d'accueil après le chargement
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3600);

    // Nettoyer le délai lorsque le composant est démonté
    return () => {
      clearTimeout(timeout);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <main>
      {showAnimation ? (
        <div className={`loader`}>
          <Rive src={Rocket} />
        </div>
      ) : (
        <>
          <Stars />
          <Nav />
          <About />
          <Skills />
          <Projets />
          <Contact />
          <Footer />
          <ArrowButton />
        </>
      )}
    </main>
  );
}
