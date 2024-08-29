import React from 'react';
import { Github, Moon, Gitlab } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectLink = ({ name, url }) => (
    <div className="mb-2">
      <Link to={url} className="text-light text-decoration-none hover-text-warning">
        {name}
      </Link>
    </div>
  );

const PortfolioLanding = () => {
  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      <div className="container">
        <header className="d-flex justify-content-between align-items-center mb-5">
            <Link to="/" className="text-decoration-none">
            <div className="h4 fw-bold mb-0">
              <span className="text-warning cursor-pointer">i</span>D
            </div>
          </Link>
          <div>
            <a href="https://gitlab.com/Arnoldsteve" target="_blank" rel="noopener noreferrer">
                <Gitlab className="me-3 text-color-white cursor-pointer" size={24} style={{ color: 'white' }}/>
            </a>

            <a href="https://github.com/Arnoldsteve" target="_blank" rel="noopener noreferrer">
                <Github className="me-3 text-color-white cursor-pointer" size={24} style={{ color: 'white' }}/>
            </a>
            <Moon className="cursor-pointer" size={24}  style={{ color: 'white' }}/>
          </div>
        </header>
        
        <main className="text-start">
          <h1 className="display-3 fw-bold mb-4">Welcome.</h1>
          <div className="mb-5">
            <p className="">
              My name is STEVE ARNOLD I'm a full-stack developer based in Mombasa, Kenya. I 
              have developed many types of front-ends from web apps to Ecommerce booking platforms.
            </p>
            <p className="">
              I'm passionate about crafting pixel-perfect, beautiful interfaces and intuitively 
              implemented UX.
            </p>
          </div>
          
          <div className="mt-5">
            <h2 className="h4 fw-semibold mb-3">Projects</h2>
            <div className="border-start border-warning ps-3">
              <ProjectLink name="Randon Quote Machine" url="/projects/Randon Quote Machine" />
              <ProjectLink name="Weather App" url="/projects/Weather App" />
              <ProjectLink name="Screen time converter" url="/projects/screen-time-converter" />
              <ProjectLink name="LTD multi" url="/projects/ltd-multi" />
              <ProjectLink name="Bitline.org" url="/projects/bitline" />
            </div>
          </div>
        </main>
        
        <footer className="mt-5 small">
          ©2024 Steve Arnold
        </footer>
      </div>
    </div>
  );
};

export default PortfolioLanding;