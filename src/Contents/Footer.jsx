import React from 'react';
import "../Styles/footer.scss";
import GitHubIcon from "../Assets/logos/github.svg";
import LINKEDIN from "../Assets/logos/linkedin.svg"

const contactMethods = [
  {
    icon: GitHubIcon,
    link: "https://github.com/LucieRg",
    alt: "GitHub Profile",
  },
  
  {
    icon: LINKEDIN, // Ajoutez ici votre autre icône
    link: "https://www.linkedin.com/in/lucie-rogé-10411a244/",
    alt: "Autre Linkedin Profile",
  }, 
];

export default function Footer() {
  return (
    <footer className='footer'>
      {contactMethods.map((method, index) => (
        <a
          key={index}
          href={method.link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <img src={method.icon} alt={method.alt} />
        </a>
      ))}
      <p>Developed by Lucie Rogé</p>
    </footer>
  );
}
