import React from "react";
import Button from "../Components/Button";
import "../Styles/nav.css";
import "../Styles/button.css"
import Logo from "../Assets/logo.svg"

export default function Nav() {
  return (
    <header>
      <img src={Logo} className="logo" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href=""> À propos</a>
          </li>
          <li>
            <a href=""> Compétences</a>
          </li>
          <li>
            <a href=""> Projets</a>
          </li>
        </ul>
        <Button label="Contact" className="button" />{" "}
      </nav>
    </header>
  );
}
