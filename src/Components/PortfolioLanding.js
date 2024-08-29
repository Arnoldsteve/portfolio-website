import React from 'react';
import { Github, Moon, Gitlab } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../Footer';
import Navbar from './Navbar';

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
        <Navbar/>        
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
              <ProjectLink name="Randon Quote Machine" url="/projects/random-quote-machine" />
              <ProjectLink name="Weather App" url="/projects/weather-app" />
              <ProjectLink name="Screen time converter" url="/projects/screen-time-converter" />
              <ProjectLink name="LTD multi" url="/projects/ltd-multi" />
              <ProjectLink name="Bitline.org" url="/projects/bitline" />
            </div>
          </div>
        </main>
        {/* <Navbar/> */}
        <Footer/>
      </div>
    </div>
  );
};

export default PortfolioLanding;