import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import Button from "../Components/Button";
import Avatar from "../Assets/avatar.svg";
import "../Styles/about.css";
import "../index.css"
import Typewriter from "typewriter-effect";
import Arrow from "../Assets/Polygone 1.svg";

export default function About() {
  

  return (
    

    <div className="full-page" id="about">

        <section className="about">
          <div className="presentation">
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Bonjour!")
                    .callFunction(() => {})
                    .typeString("<br /> Je suis Lucie Rogé,")
                    .callFunction(() => {})
                    .typeString(" <br /> développeuse front-end.")
                    .start();
                }}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec lorem id eros mattis ultrices vitae vel leo. Nulla vel justo
              ac risus volutpat rhoncus vel in tellus.
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
