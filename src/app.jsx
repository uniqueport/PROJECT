import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// ✅ Imports match lowercase file names exactly
import Home from "./pages/home.jsx";
import Experience from "./pages/experience.jsx";
import Skills from "./pages/skills.jsx";
import Project from "./pages/project.jsx";
import Education from "./pages/education.jsx";
import Summary from "./pages/summary.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="flex gap-6 bg-white shadow px-6 py-4">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Project</Link>
          <Link to="/education">Education</Link>
          <Link to="/summary">Summary</Link>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/education" element={<Education />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}