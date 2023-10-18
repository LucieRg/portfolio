import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import Avatar from "../Assets/avatar.svg";
import "../Styles/about.css";
import "../index.css";
import Typewriter from "typewriter-effect";
import Arrow from "../Assets/triangle.svg";

export default function About() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, 100); // Vous pouvez ajuster la durée en millisecondes
  }, []);

  return (
    <div className={`full-page about-transition ${isHidden ? "hidden" : ""}`} id="about">
      <section className="about">
        <div className="presentation">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Bonjour!")
                  .callFunction(() => {})
                  .typeString(" Je suis Lucie Rogé,")
                  .callFunction(() => {})
                  .typeString(" <br /> développeuse front-end.")
                  .start();
              }}
            />
          </h1>
          <p>
            J'ai consolidé mes compétences en suivant
            une formation intensive chez OpenClassrooms. Ma spécialité réside
            dans le développement d'interfaces utilisateur dynamiques et
            interactives, en mettant en œuvre des technologies telles que
            JavaScript, React, et Redux. Je suis passionnée par la création
            d'expériences utilisateur exceptionnelles et je suis toujours prête
            à relever de nouveaux défis pour rendre le web plus innovant.
          </p>
          <Button label="Télécharger mon CV" className="button" />
        </div>

        <img src={Avatar} className="avatar" alt="avatar Lucie Rogé" />
      </section>
      <a href="#skills" className="arrow-box">
        <img src={Arrow} className="arrow bounce" alt="arrow" />
      </a>
    </div>
  );
}
