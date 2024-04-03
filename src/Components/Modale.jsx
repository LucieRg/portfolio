import React from "react";
import Modal from "react-modal";
import "../Styles/modale.scss";
import GITHUB from "../Assets/logos/github.svg";

const Modale = ({ isOpen, onRequestClose, project }) => {
  return (
    <div>
      <Modal
        className="modale-container"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <i
          className="fa-solid fa-x"
          onClick={onRequestClose}
          style={{ cursor: "pointer", alignSelf: "flex-end" }}
        ></i>

        <p className="modale-txt">
          <span className="bold-text">Présentation</span> <br />
          {project.presentation}
        </p>

        <div className="icon-position">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src={GITHUB}
                alt="GitHub"
                className="github"
                style={{
                  width: "50px",
                }}
              />
            </a>
          )}
          {project.site && (
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Modale;
