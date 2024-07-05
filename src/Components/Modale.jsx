import React from "react";
import Modal from "react-modal";
import "../Styles/modale.scss";
import GITHUB from "../Assets/icones-projects/github.svg";

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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(24, 5, 37, 0.9)",
            borderRadius: "25px",
            border: "none",
            padding: "20px",
            width: "80%",
            maxWidth: "700px",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: "0px 2px 6px #ffffff73",
            position: "relative",
          },
        }}
      >
        <i
          className="fa-solid fa-x"
          onClick={onRequestClose}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        ></i>
        <h2 className="modale-title">{project.title}</h2>
        <p className="modale-txt">{project.presentation}</p>

        <div className="icon-position">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src={GITHUB}
                alt="GitHub"
                className="github"
                style={{
                  width: "40px",
                }}
              />
            </a>
          )}
          {project.site && (
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Modale;
