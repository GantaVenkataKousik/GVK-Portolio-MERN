
import React, { useEffect } from 'react';
import GVKPortfolio from "./pages/GVKPortfolio.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./pages/Admin.jsx";
import { Routes, Route } from "react-router-dom";

function App() {



  return (
    <>

      <Routes>
        <Route path="/" element={<GVKPortfolio />} />
        <Route path="/portfolio" element={<GVKPortfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>

  );
}

export default App;
