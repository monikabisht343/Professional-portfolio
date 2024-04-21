import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Blog from './components/Blog';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResumeSection from "./components/Resume"; // Ensure correct import name

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Routes>
        <Route path="/resume-standalone" element={<ResumeSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
