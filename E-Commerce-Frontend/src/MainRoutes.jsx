// src/MainRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home"; // Make sure the file name matches
import App from "./App";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />
        {/* Product list page */}
        <Route path="/products" element={<App />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
