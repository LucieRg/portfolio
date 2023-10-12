import React from "react";
import GitHubIcon from "../Assets/logos/github.svg"; // Assurez-vous d'importer les autres logos si nécessaire
import "../Styles/contact.css";
import Button from "../Components/Button";

export default function Contact() {
  const contactMethods = [
    GitHubIcon, // Ajoutez les autres logos ici
    GitHubIcon, // Ajoutez les autres logos ici
    GitHubIcon, // Ajoutez les autres logos ici
  ];

  return (
    <div className="contact">
      <div>
        <h2>Me contacter</h2>
        <div className="contact-methods">
          {contactMethods.map((icon, index) => (
            <div className="contact-method" key={index}>
              <img src={icon} alt={`Contact Method ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="prenom"></label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Prénom & Nom"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
            ></textarea>
          <Button label="Envoyer" className="button" />
          </div>
        </form>
      </div>
    </div>
  );
}
