import React, {useEffect} from "react";
import { Parallax, Background } from "react-parallax";
import Button from "../Components/Button";
import Avatar from "../Assets/avatar.svg";
import "../Styles/about.css";
import Typewriter from "typewriter-effect";
import Arrow from "../Assets/Polygone 1.svg"

export default function About() {
  const parallaxStyle = {
    backgroundColor: "linear-gradient(to bottom, #FF5733, #FF0A54)", // Remplacez ces couleurs par votre dégradé de couleurs
  };
  
  return (
    <Parallax style={parallaxStyle} strength={500}>
    <div>
      <section className="about">
        <div className="presentation">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Bonjour!")
                  .callFunction(() => {
                  })
                  .typeString("<br /> Je suis Lucie Rogé,")
                  .callFunction(() => {
                  })
                  .typeString("  développeuse front-end.")
                  .start();
              }}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec lorem id eros mattis ultrices vitae vel leo. Nulla vel justo ac
            risus volutpat rhoncus vel in tellus. 
          </p>
          <Button label="Télécharger mon CV" className="button" />
        </div>

        <img src={Avatar} className="avatar" alt="avatar Lucie Rogé" />
      </section>
      <div className="arrow-box">
      <img src={Arrow}  className="arrow" alt="arrow" />
      </div>
    </div>
    </Parallax>
  );
}
