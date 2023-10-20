import React, { useState, useEffect } from 'react';
import Rive from "@rive-app/react-canvas";
import { useNavigate } from 'react-router-dom'; 
import Rocket from "../Assets/rocket.riv"
import "../index.scss"

export default function Loader() {
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setShowAnimation(false);

     
      navigate('Home'); 
    }, 3600); 
   
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={`loader  ${showAnimation ? '' : 'hidden'}`}>
       
      {showAnimation && <Rive src={Rocket} />}
   
    </div>
   
  );
}
