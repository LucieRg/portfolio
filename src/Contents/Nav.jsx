import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import "../Styles/nav.css";
import "../Styles/button.css";
import Logo from "../Assets/logo.svg";

export default function Nav() {
  const [highlightedLink, setHighlightedLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.getElementById("about").offsetTop;
      const skillsSection = document.getElementById("skills").offsetTop;
      const projectsSection = document.getElementById("projects").offsetTop;

      if (scrollPosition >= aboutSection && scrollPosition < skillsSection) {
        setHighlightedLink("about");
      } else if (
        scrollPosition >= skillsSection &&
        scrollPosition < projectsSection
      ) {
        setHighlightedLink("skills");
      } else if (scrollPosition >= projectsSection) {
        setHighlightedLink("projects");
      } else {
        setHighlightedLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <img src={Logo} className="logo" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              className={highlightedLink === "about" ? "active" : ""}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={highlightedLink === "skills" ? "active" : ""}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={highlightedLink === "projects" ? "active" : ""}
            >
              Projets
            </a>
          </li>
        </ul>
        <a href="#contact">
          <Button label="Contact" className="button" />
        </a>
      </nav>
    </header>
  );
}
