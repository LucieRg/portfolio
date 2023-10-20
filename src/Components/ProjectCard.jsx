import React from 'react';
import "../Styles/projets.scss"



const ProjectCard = ({ title, subtitle, languages, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
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
