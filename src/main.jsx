import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import API from "./Api_screen.jsx";
createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api" element={<API />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
);
