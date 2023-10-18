import React, { useState, useEffect } from "react";
import "../Styles/projets.css";
import { Events } from "react-scroll";
import ProjectCard from "../Components/ProjectCard";
import CSS from "../Assets/icones-projects/css3.svg";
import HTML from "../Assets/icones-projects/html5.svg";
import JS from "../Assets/icones-projects/js.svg";
import REACT from "../Assets/icones-projects/react.svg";
import REDUX from "../Assets/icones-projects/redux.svg";
import SASS from "../Assets/icones-projects/sass.svg";
import WP from "../Assets/icones-projects/wp.svg";
import "../index.css";

export default function Projets() {
  const projects = [
    {
      title: "Booki",
      subtitle: "Site d'hébergement de vacances",
      languages: [HTML, CSS],
    },
    {
      title: "Oh My Food!",
      subtitle: "Startup de restauration",
      languages: [HTML, CSS],
    },
    {
      title: "Sophie Bluel",
      subtitle: "Portfolio d'une architecte d'intérieur",
      languages: [HTML, CSS, JS],
    },
  
    {
      title: "Kasa",
      subtitle: "Site de location entre particuliers",
      languages: [CSS,SASS,JS, REACT],
    },
    {
      title: "ArgentBank",
      subtitle: "Banque en ligne",
      languages: [CSS,JS, REACT, REDUX],
    },
    {
      title: "Amazone",
      subtitle: "Carrefour pour l'égalité de genre",
      languages: [WP],
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      const projectsSectionTop = projectsSection.offsetTop;
      const projectsSectionHeight = projectsSection.clientHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= projectsSectionTop - viewportHeight / 2 &&
        scrollPosition <= projectsSectionTop + projectsSectionHeight
      ) {
        setAnimate(true);
      } 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`projets full-page${animate ? " animated" : ""}`} id="projects">
      <h2>Projets</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <p className="projets-text">*N'hésitez pas à jeter un coup d'oeil à mon github pour voir tous mes projets!</p>
    </div>
  );
}
