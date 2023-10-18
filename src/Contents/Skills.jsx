import React, { useState, useEffect } from "react";
import { Events } from "react-scroll";
import HTMLIcon from "../Assets/logos/html5.svg";
import CSSIcon from "../Assets/logos/css3.svg";
import JSIcon from "../Assets/logos/js.svg";
import ReactIcon from "../Assets/logos/react.svg";
import ReduxIcon from "../Assets/logos/redux.svg";
import SASSIcon from "../Assets/logos/sass.svg";
import WPIcon from "../Assets/logos/wp.svg";
import FigmalIcon from "../Assets/logos/figma.svg";
import "../Styles/skills.css";
import "../index.css";

export default function Skills() {
  const skillsData = [
    { name: "HTML5", icon: HTMLIcon },
    { name: "CSS3", icon: CSSIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "React", icon: ReactIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "SASS", icon: SASSIcon },
    { name: "WordPress", icon: WPIcon },
    { name: "Figma", icon: FigmalIcon },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const skillsSectionTop = skillsSection.offsetTop;
      const skillsSectionHeight = skillsSection.clientHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= skillsSectionTop - viewportHeight / 2 &&
        scrollPosition <= skillsSectionTop + skillsSectionHeight
      ) {
        setAnimate(true);
        Events.scrollEvent.remove("begin");
      }
    };

    Events.scrollEvent.register("begin", () => {
      handleScroll();
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={`skills full-page ${animate ? "animated" : ""}`} id="skills">
      <h2>Compétences</h2>

      <div className="icons">
        {skillsData.map((skill, index) => (
          <div className="icon-container" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
