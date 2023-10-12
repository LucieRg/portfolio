import React from "react";
import HTMLIcon from "../Assets/logos/html5.svg";
import CSSIcon from "../Assets/logos/css3.svg";
import JSIcon from "../Assets/logos/js.svg";
import ReactIcon from "../Assets/logos/react.svg";
import ReduxIcon from "../Assets/logos/redux.svg";
import SASSIcon from "../Assets/logos/sass.svg";
import WPIcon from "../Assets/logos/wp.svg";
import FigmalIcon from "../Assets/logos/figma.svg";

import "../Styles/skills.css";

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

  return (
    <div className="skills">
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
