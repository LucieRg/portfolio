import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link,  animateScroll  } from "react-scroll"; // Importez les composants de react-scroll
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
            <Link to="about" spy={true} duration={500} offset={-70} className={highlightedLink === "about" ? "active" : ""}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true}  duration={500} offset={-70} className={highlightedLink === "skills" ? "active" : ""}>
              Compétences
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true}  duration={500} offset={-70} className={highlightedLink === "projects" ? "active" : ""}>
              Projets
            </Link>
          </li>
        </ul>
        <Link to="contact" spy={true}  duration={500}>
          <Button label="Contact" className="button" />
        </Link>
      </nav>
    </header>
  );
}
