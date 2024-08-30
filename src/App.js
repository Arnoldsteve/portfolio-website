import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioLanding from './Components/PortfolioLanding';
import ProjectPage from './Components/ProjectPage';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import { Footer } from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <PortfolioLanding/>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/projects/:projectName" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/*" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;