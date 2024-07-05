import React, { useEffect, useState } from "react";
import Avatar from "../Assets/avatar.svg";
import "../Styles/about.scss";
import "../index.scss";
import Typewriter from "typewriter-effect";
import Arrow from "../Assets/triangle.svg";
import cvPDF from "../Assets/CV_Lucie_Rogé.pdf";

export default function About() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, 100);
  }, []);

  return (
    <div
      className={`full-page about-transition ${isHidden ? "hidden" : ""}`}
      id="about"
    >
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
                  .typeString(" <br /> développeuse full stack.")
                  .start();
              }}
            />
          </h1>
          <p>
            Développeuse passionnée, j'ai une expertise en Java, JavaScript,
            React et Angular. Curieuse et à la recherche de nouvelles
            opportunités, je suis prête à m'investir dans des projets innovants
            et à relever de nouveaux défis technologiques.
          </p>
          <button className="button" onClick={() => window.open(cvPDF)}>
            Mon CV
          </button>
        </div>

        <img src={Avatar} className="avatar" alt="avatar Lucie Rogé" />
      </section>
      <a href="#skills" className="arrow-box">
        <img src={Arrow} className="arrow bounce" alt="arrow" />
      </a>
    </div>
  );
}
