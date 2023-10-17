import React, { useEffect, useState } from "react";
import Arrow from "../Assets/Polygone 1.svg";

export default function ArrowButton() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtenir la position actuelle de la fenêtre lors du défilement
      const scrollPosition = window.scrollY;

        if (scrollPosition >  200) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      
    };

    // Écouter les événements de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showArrow ? (
    <button className="arrow-button bounce" onClick={scrollToTop}>
      <img src={Arrow} alt="Arrow to top" />
    </button>
  ) : null;
}
