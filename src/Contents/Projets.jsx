import React from "react";
import "../Styles/projets.css";
import ProjectCard from "../Components/ProjectCard";
import CSS from "../Assets/icones-projects/css3.svg";
import HTML from "../Assets/icones-projects/html5.svg";
import JS from "../Assets/icones-projects/js.svg"
import REACT from "../Assets/icones-projects/react.svg";
import REDUX from "../Assets/icones-projects/redux.svg";
import SASS from "../Assets/icones-projects/sass.svg";
import WP from "../Assets/icones-projects/wp.svg";


export default function Projets() {
  const projects = [
    {
      title: "BOOKI",
      subtitle: "Site d'hébergement de vacances",
      languages: [HTML, CSS],
    },
    {
      title: "KASA",
      subtitle: "Site d'hébergement de vacances",
      languages: [HTML, CSS, JS, REACT],
    },
    {
      title: "KASA",
      subtitle: "Site d'hébergement de vacances",
      languages: [JS, REACT],
    },
    {
      title: "KASA",
      subtitle: "Site d'hébergement de vacances",
      languages: [HTML, CSS, REDUX, REACT],
    },
    {
      title: "KASA",
      subtitle: "Site d'hébergement de vacances",
      languages: [HTML, CSS],
    },
    {
      title: "KASA",
      subtitle: "Site d'hébergement de vacances",
      languages: [WP],
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <div className="projets">
      <h2>Projets</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
