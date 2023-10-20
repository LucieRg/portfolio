import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link } from "react-scroll";
import "../Styles/nav.scss";
import "../Styles/button.scss";
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

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <img src={Logo} className="logo" alt="Logo" />
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="navbar-links">
          <li className="navbar-items">
            <Link
              to="about"
              spy={true}
              duration={500}
              offset={-70}
              className={highlightedLink === "about" ? "active" : ""}
              onClick={handleShowLinks}
            >
              À propos
            </Link>
          </li>
          <li className="navbar-items">
            <Link
              to="skills"
              spy={true}
              duration={500}
              offset={-70}
              className={highlightedLink === "skills" ? "active" : ""}
              onClick={handleShowLinks}
            >
              Compétences
            </Link>
          </li>
          <li className="navbar-items">
            <Link
              to="projects"
              spy={true}
              duration={500}
              offset={-70}
              className={highlightedLink === "projects" ? "active" : ""}
              onClick={handleShowLinks}
            >
              Projets
            </Link>
          </li>
          <li className="navbar-items">
            <Link
              to="contact"
              spy={true}
              duration={500}
              onClick={handleShowLinks}
            >
              <Button label="Contact" className=" button" />
            </Link>
          </li>
        </ul>
        <button className="burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}
