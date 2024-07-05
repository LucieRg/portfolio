import React, { useState, useEffect } from "react";
import "../Styles/projets.scss";
import Modale from "../Components/Modale";
import ProjectCard from "../Components/ProjectCard";
import ProjectsData from "../Datas/ProjectsDatas";
import "../index.scss";
import GitHubIcon from "../Assets/icones-projects/github.svg";

export default function Projets() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <div
      className={`projets full-page${animate ? " animated" : ""}`}
      id="projects"
    >
      <h2>Projets</h2>
      <div className="projects-list">
        {ProjectsData.map((project, id) => (
          <ProjectCard
            key={id}
            title={project.title}
            subtitle={project.subtitle}
            languages={project.languages}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      <a
        href="https://github.com/LucieRg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHubIcon} alt="GitHub" className="logo-github" />
        <p>Retrouvez tous mes projets sur Github</p>
      </a>

      {selectedProject && (
        <Modale
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          project={selectedProject}
          appElement="#root"
        />
      )}
    </div>
  );
}
