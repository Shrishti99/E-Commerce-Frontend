// src/MainRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home"; // make sure this path is correct
import App from "./App";

function MainRoutes() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<Home />} />

      {/* Product list page */}
      <Route path="/products" element={<App />} />
    </Routes>
  );
}

export default MainRoutes;
