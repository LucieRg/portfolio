import React, { useState, useEffect } from "react";
import { Events } from "react-scroll";
import "../Styles/skills.scss";
import "../index.scss";
import skillsData from "../Datas/SkillsData";
export default function Skills() {

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
