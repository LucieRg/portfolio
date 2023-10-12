import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Stars = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  function createStar() {
    const size = Math.random() * 1 + "px";
    const colors = ["#ace7d3", "#72a2c6", "#e7889e", "#0d001c", "#0d001c", "#180525", "#300f2c", "#371e24"];
    const index = Math.floor(Math.random() * colors.length);

    const Star = styled.span`
      position: absolute;
      border-radius: 50%;
      height: ${size};
      width: ${size};
      background: ${colors[index]};
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
    `;

    let star = <Star key={Math.random()} />;
    setStars([...stars, star]);

    const timeout = setTimeout(() => {
      setStars((oldStars) => oldStars.filter((oldstar) => oldstar !== star));
    }, 30000);
    return () => clearTimeout(timeout);
  }

  useEffect(() => {
    const starsInterval = setInterval(() => {
      createStar();
    }, 150); // Augmentez le délai pour les étoiles

    return () => {
      clearInterval(starsInterval);
    };
  }, [stars]);

  return (
    <div>
      {stars}
      <ShootingStarGenerator setShootingStars={setShootingStars} />
      {shootingStars}
    </div>
  );
};

const ShootingStarGenerator = ({ setShootingStars }) => {
  const createShootingStar = () => {
    const size = "2px";
    const topPosition = Math.random() * 100; // Position verticale aléatoire (0-100%)
    const leftPosition = Math.random() * 100; // Position horizontale aléatoire (0-100%)
    const transformX = Math.random() * 80 - 50; // Valeur aléatoire pour l'axe X (gauche ou droite)
    const transformY = Math.random() * 100 - 50; // Valeur aléatoire pour l'axe Y (haut ou bas)

    const ShootingStarContainer = styled.div`
      position: absolute;
      top: ${topPosition}%;
      left: ${leftPosition}%; /* Position aléatoire sur l'axe horizontal */
    `;

    const shootingStarKeyframes = keyframes`
      from {
        transform: translate(0, 0);
        opacity: 1;
      }
      to {
        transform: translate(${transformX}vw, ${transformY}vh);
        opacity: 0;
      }
    `;

    const ShootingStar = styled.span`
      position: absolute;
      border-radius: 50%;
      height: ${size};
      width: ${size};
      background: white;
      animation: ${shootingStarKeyframes} 1s linear;
      transform-origin: center center;
    `;

    let shootingStar = (
      <ShootingStarContainer key={Math.random()}>
        <ShootingStar />
      </ShootingStarContainer>
    );

    setShootingStars((oldStars) => [...oldStars, shootingStar]);

    const timeout = setTimeout(() => {
      setShootingStars((oldStars) =>
        oldStars.filter((oldstar) => oldstar !== shootingStar)
      );
    }, 12000);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    const shootingStarsInterval = setInterval(() => {
      createShootingStar();
    }, 10000); 
    return () => {
      clearInterval(shootingStarsInterval);
    };
  }, []);

  return null;
};

export default Stars;
