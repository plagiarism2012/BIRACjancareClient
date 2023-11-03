import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist/umd/react-router-dom.development";

// component imports
import Navbar from "./Navbar";
import Login from "./Login";
import Dashboard from "./Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;