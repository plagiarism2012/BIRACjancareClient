import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist/umd/react-router-dom.development";

// component imports
import Navbar from "./Navbar";  
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;