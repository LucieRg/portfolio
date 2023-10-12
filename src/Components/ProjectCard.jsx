import React from 'react';
import "../Styles/projets.css"



const ProjectCard = ({ title, subtitle, languages }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className="languages">
        {languages.map((language, index) => (
          <img key={index} src={language} alt={`Logo ${language}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
