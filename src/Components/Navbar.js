import React from "react";
import { Link } from 'react-router-dom';
import { Github, Moon, Gitlab } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="text-decoration-none navbar-left">
        <div className="h4 fw-bold mb-0">
          <span className="text-warning cursor-pointer">S</span>A
        </div>
      </Link>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/services">Services</Link>
            <ul className="dropdown-content">
              <li><Link to="/services/web-design">Web Design</Link></li>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/web-testing">Web Testing</Link></li>
              <li><Link to="/services/android-development">Android Development</Link></li>
              <li><Link to="/services/others">Others</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/projects">Projects</Link>
            <ul className="dropdown-content">
              <li><Link to="/projects/random-quote-machine">Random Quote Machine</Link></li>
              <li><Link to="/projects/weather-app">Weather App</Link></li>
              <li><Link to="/projects/screen-time-converter">Screen Time Converter</Link></li>
              <li><Link to="/projects/ltd-multi">LTD Multi</Link></li>
              <li><Link to="/projects/bitline">Bitline.org</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="https://gitlab.com/Arnoldsteve" target="_blank" rel="noopener noreferrer">
          <Gitlab className="me-3 text-color-white cursor-pointer" size={24} style={{ color: 'white' }}/>
        </a>
        <a href="https://github.com/Arnoldsteve" target="_blank" rel="noopener noreferrer">
          <Github className="me-3 text-color-white cursor-pointer" size={24} style={{ color: 'white' }}/>
        </a>
        <Moon className="cursor-pointer" size={24} style={{ color: 'white' }}/>
      </div>
    </nav>
  );
};

export default Navbar;