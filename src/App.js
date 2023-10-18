import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import React from 'react';
import  Modal  from 'react-modal';
import Loader from './Page/Loader';
import Home from "./Page/Home";

Modal.setAppElement('#root');


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
