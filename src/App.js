import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Loader from './Page/Loader';
import Home from "./Page/Home";


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
