import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import "../Styles/contact.scss";
import Button from "../Components/Button";
import "../index.scss";

export default function Contact() {
  const { register, handleSubmit, formState, reset } = useForm();
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sendEmail = (data) => {
    emailjs
        .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            (result) => {
              console.log("Email envoyé :", result.text);
              reset();
              setIsSubmitted(true);
            },
            (error) => {
              console.error("Erreur lors de l'envoi :", error.text);
            }
        );

  };

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const contactSectionTop = contactSection.offsetTop;
      const contactSectionHeight = contactSection.clientHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= contactSectionTop - viewportHeight / 2 &&
        scrollPosition <= contactSectionTop + contactSectionHeight
      ) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`contact${animate ? " animated" : ""}`} id="contact">
      <h2>Me contacter</h2>
      <div className="contact-form">
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="form-group">
            <label htmlFor="prenom"></label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Prénom & Nom"
              {...register("prenom")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              {...register("message")}
              required
            ></textarea>
            <Button type="submit" label="Envoyer" className="button" />
          </div>
          {isSubmitted && (
            <div className="success-message">
              Votre message a été envoyé avec succès. Nous vous répondrons
              bientôt.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
